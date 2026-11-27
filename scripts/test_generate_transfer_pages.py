import json
import sys
from pathlib import Path

import pytest

sys.path.insert(0, str(Path(__file__).resolve().parent))

import generate_transfer_pages as gen  # noqa: E402


def step(action, entity, detail):
    return {"action": action, "executing_entity": entity, "execution_method": "automatic", "detail": detail}


def action(entity, detail):
    return {"executing_entity": entity, "detail": detail}


def row(tld, steps, *, lock="opusdns", flow_detail=None):
    lock_detail = "OpusDNS reads the transfer lock at OpenSRS." if lock else f".{tld} has no transfer lock."
    actions = {
        "status": {
            "read_transfer_lock": action(lock, lock_detail),
            "update_transfer_lock": action(lock, "OpusDNS changes the lock through the OpenSRS API." if lock else f".{tld} has no transfer lock."),
        },
        "dns": {
            "read_nameservers": action("opusdns", "OpusDNS reads the nameservers in each sync."),
            "update_nameservers": action("opusdns", "OpusDNS changes the nameservers through the OpenSRS API."),
        },
        "contacts": {
            "read_contacts": action("opusdns", "OpusDNS reads the contacts in each sync."),
            "update_registrant": action("customer", "OpusDNS cannot change the registrant on connected domains yet. Change it at OpenSRS."),
            "update_contacts": action("customer", "OpusDNS cannot change the other contacts at OpenSRS. Change them at OpenSRS."),
            "delete_contacts": action(None, f".{tld} requires every contact it has."),
        },
        "privacy": {
            "read_privacy": action("customer", "OpusDNS has no access to WHOIS privacy at OpenSRS yet. Check it at OpenSRS."),
            "update_privacy": action("customer", "OpusDNS has no access to WHOIS privacy at OpenSRS yet. Change it at OpenSRS."),
        },
    }
    detail = flow_detail or "OpusDNS transfers the domain in. Unless it is rejected, the registry completes it within the transfer time."
    return {"tld": tld, "actions": actions, "flows": {"transfer_to_opusdns": {"steps": steps, "detail": detail}}}


def gtld_steps(tld):
    return [
        step("update_transfer_lock", "opusdns", "OpusDNS removes the transfer lock at OpenSRS."),
        step("read_auth_code", "opusdns", "OpusDNS reads the auth code at OpenSRS."),
        step("request_transfer", "opusdns", f"OpusDNS sends the transfer to the .{tld} registry."),
        step("complete_transfer", "registry", f"The .{tld} registry moves the domain to OpusDNS."),
    ]


EXPORT = {
    "tld_types": {"com": "gTLD", "net": "gTLD", "se": "ccTLD"},
    "registrars": {
        "opensrs": [
            row("com", gtld_steps("com")),
            row("net", gtld_steps("net")),
            row(
                "se",
                [
                    step("reset_auth_code", "customer", "Get a new auth code at OpenSRS."),
                    step("request_transfer", "opusdns", "OpusDNS sends the transfer to the .se registry."),
                    step("complete_transfer", "registry", "The .se registry moves the domain to OpusDNS."),
                ],
                lock=None,
            ),
        ]
    },
}


def test_registrar_page_lists_the_usual_steps_and_the_tlds_that_differ():
    page = gen.render_registrar("opensrs", EXPORT["registrars"]["opensrs"], EXPORT["tld_types"])
    usual = page.split("## TLDs with other steps")[0]
    assert "| 1 | Remove the transfer lock | ✅ OpusDNS | OpusDNS removes the transfer lock at OpenSRS. |" in usual
    assert "OpusDNS sends the transfer to the registry." in usual
    others = page.split("## TLDs with other steps")[1].split("## Managing")[0]
    assert ".se" in others and ".com" not in others and ".net" not in others
    assert "↗️ Get a new auth code → ✅ Request the transfer → ⚙️ The registry transfers the domain" in others


def test_a_tld_differing_only_where_opusdns_does_nothing_is_not_listed():
    page = gen.render_registrar("opensrs", EXPORT["registrars"]["opensrs"], EXPORT["tld_types"])
    managing = page.split("## Managing a connected domain")[1]
    # .se has no lock: OpusDNS's part changes, so it is listed.
    assert "➖ See the transfer lock: no transfer lock" in managing
    # Every TLD requires every contact here: not a difference.
    assert "Remove a contact role:" not in managing


def test_an_unknown_tld_sentence_fails_the_run():
    rows = [row("com", gtld_steps("com"), flow_detail=".com has something new.")]
    rows[0]["flows"]["transfer_to_opusdns"]["steps"] = []
    with pytest.raises(SystemExit, match="add it to TLD_SENTENCES"):
        gen.render_registrar("opensrs", rows, {"com": "gTLD"})


def test_another_opusdns_account_keeps_opusdns_as_the_subject():
    reg = gen.REGISTRARS["opusdns"]
    assert gen.template("OpusDNS reads the auth code at OpusDNS.", "com", reg) == "OpusDNS reads the auth code at {r}."


def test_config_gets_the_tab_after_tld_info_and_is_idempotent(tmp_path):
    config = {
        "navigation": {
            "tabs": [{"title": "Guides", "to": "/"}, {"title": "TLD Info", "to": "/tld-knowledge-base"}, {"title": "Changelog", "to": "/changelog"}],
            "routes": {"/": {"type": "group"}},
        }
    }
    path = tmp_path / "scalar.config.json"
    path.write_text(json.dumps(config, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    assert gen.update_config(path, ["opensrs", "opusdns"]) is True
    written = json.loads(path.read_text(encoding="utf-8"))
    assert [tab["title"] for tab in written["navigation"]["tabs"]] == ["Guides", "TLD Info", "Transfers", "Changelog"]
    children = written["navigation"]["routes"]["/transfers"]["children"]
    assert list(children) == ["/overview", "/opensrs", "/opusdns"]
    assert gen.update_config(path, ["opensrs", "opusdns"]) is False
