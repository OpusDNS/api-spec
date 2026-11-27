import json
import sys
from pathlib import Path

import pytest

sys.path.insert(0, str(Path(__file__).resolve().parent))

import generate_transfer_pages as gen  # noqa: E402

FLOW_DETAIL = "OpusDNS transfers the domain in. Unless it is rejected, the registry completes it within the transfer time."


def step(action, entity, detail):
    return {"action": action, "executing_entity": entity, "execution_method": "automatic", "detail": detail}


def action(entity, detail):
    return {"executing_entity": entity, "detail": detail}


def row(tld, steps, *, lock=True, privacy=True, contacts="opusdns_none", flow_detail=FLOW_DETAIL):
    lock_read = action("opusdns", "OpusDNS reads the transfer lock at OpenSRS.") if lock else action(None, f".{tld} has no transfer lock.")
    lock_set = action("opusdns", "OpusDNS changes the lock through the OpenSRS API.") if lock else action(None, f".{tld} has no transfer lock.")
    privacy_read = action("customer", "OpusDNS has no access to WHOIS privacy at OpenSRS yet. Check it at OpenSRS.") if privacy else action(None, f".{tld} has no privacy service.")
    privacy_set = action("customer", "OpusDNS has no access to WHOIS privacy at OpenSRS yet. Change it at OpenSRS.") if privacy else action(None, f".{tld} has no privacy service.")
    remove_contact = (
        action(None, f".{tld} requires every contact it has.")
        if contacts == "opusdns_none"
        else action("customer", "OpusDNS cannot remove a contact from a connected domain. Remove it at OpenSRS.")
    )
    actions = {
        "status": {"read_transfer_lock": lock_read, "update_transfer_lock": lock_set},
        "dns": {
            "read_nameservers": action("opusdns", "OpusDNS reads the nameservers in each sync."),
            "update_nameservers": action("opusdns", "OpusDNS changes the nameservers through the OpenSRS API."),
        },
        "contacts": {
            "read_contacts": action("opusdns", "OpusDNS reads the contacts in each sync."),
            "update_registrant": action("customer", "OpusDNS cannot change the registrant on connected domains yet. Change it at OpenSRS."),
            "update_contacts": action("customer", "OpusDNS cannot change the other contacts at OpenSRS. Change them at OpenSRS."),
            "delete_contacts": remove_contact,
        },
        "privacy": {"read_privacy": privacy_read, "update_privacy": privacy_set},
    }
    return {"tld": tld, "actions": actions, "flows": {"transfer_to_opusdns": {"steps": steps, "detail": flow_detail}}}


def usual_steps(tld, *, approve="customer", privacy_step=False):
    steps = []
    if privacy_step:
        steps.append(step("update_privacy", "customer", "OpenSRS refuses to remove the lock while WHOIS privacy is on. Turn it off at OpenSRS first."))
    steps += [
        step("update_transfer_lock", "opusdns", "OpusDNS removes the transfer lock at OpenSRS."),
        step("read_auth_code", "opusdns", "OpusDNS reads the auth code at OpenSRS."),
        step("request_transfer", "opusdns", f"OpusDNS sends the transfer to the .{tld} registry."),
        step("approve_transfer_out", approve, "Approve the transfer at OpenSRS." if approve == "customer" else "OpusDNS approves the transfer at OpenSRS."),
        step("complete_transfer", "registry", f"The .{tld} registry moves the domain to OpusDNS."),
    ]
    return steps


def se_steps(tld="se"):
    return [
        step("reset_auth_code", "customer", "Get a new auth code at OpenSRS."),
        step("request_transfer", "opusdns", f"OpusDNS sends the transfer to the .{tld} registry."),
        step("complete_transfer", "registry", f"The .{tld} registry moves the domain to OpusDNS."),
    ]


TYPES = {"com": "gTLD", "net": "gTLD", "org": "gTLD", "se": "ccTLD", "nu": "ccTLD", "xx": "ccTLD", "fr": "ccTLD"}


def page(rows):
    return gen.render_registrar("opensrs", rows, TYPES)


def section(text, start, end=None):
    part = text.split(start, 1)[1]
    return part.split(end, 1)[0] if end else part


def test_the_usual_steps_and_the_tlds_that_differ():
    text = page([row("com", usual_steps("com")), row("net", usual_steps("net")), row("se", se_steps(), lock=False)])
    usual = section(text, "## At most TLDs", "## TLDs with other steps")
    assert "| 1 | Remove the transfer lock | ✅ OpusDNS | OpusDNS removes the transfer lock at OpenSRS. |" in usual
    others = section(text, "## TLDs with other steps", "## Managing")
    assert ".se" in others and ".com" not in others and ".net" not in others
    assert "↗️ Get a new auth code → ✅ Request the transfer → ⚙️ The registry transfers the domain" in others


def test_the_customers_auth_code_is_sent_with_the_request():
    text = page([row("com", usual_steps("com")), row("net", usual_steps("net")), row("se", se_steps(), lock=False)])
    rows = [row("com", usual_steps("com")), row("net", usual_steps("net"))]
    rows[0]["flows"]["transfer_to_opusdns"]["steps"][1] = step("read_auth_code", "customer", "Get the auth code at OpenSRS.")
    rows[1]["flows"]["transfer_to_opusdns"]["steps"][1] = step("read_auth_code", "customer", "Get the auth code at OpenSRS.")
    assert "Get the auth code at OpenSRS and send it as `auth_code`." in page(rows)
    assert "Leave out the auth code where OpusDNS gets it for you." in text


def test_approval_is_optional_at_gtlds_only():
    text = page([row("com", usual_steps("com")), row("net", usual_steps("net")), row("fr", usual_steps("fr"))])
    usual = section(text, "## At most TLDs", "## TLDs with other steps")
    assert "| Approve the transfer (optional) | ↗️ You, at OpenSRS | Optional: approve it at OpenSRS to finish sooner." in usual
    others = section(text, "## TLDs with other steps", "## Managing")
    assert ".fr" in others and "↗️ Approve the transfer →" in others and "(optional)" not in others


def test_the_privacy_step_neither_lists_a_tld_nor_disappears_from_a_listed_one():
    rows = [
        row("com", usual_steps("com", privacy_step=True)),
        row("net", usual_steps("net", privacy_step=True)),
        row("org", usual_steps("org"), privacy=False),
        row("se", [se_steps()[0]] + [step("update_privacy", "customer", "OpenSRS refuses to remove the lock while WHOIS privacy is on. Turn it off at OpenSRS first.")] + se_steps()[1:], lock=False),
    ]
    others = section(page(rows), "## TLDs with other steps", "## Managing")
    assert ".org" not in others
    assert "↗️ Turn WHOIS privacy off" in others


def test_tlds_with_the_same_shown_steps_share_a_row():
    rows = [row("com", usual_steps("com")), row("net", usual_steps("net")), row("org", usual_steps("org")), row("se", se_steps(), lock=False), row("nu", se_steps("nu"), lock=False)]
    others = section(page(rows), "## TLDs with other steps", "## Managing")
    assert ".nu" in others and ".se" in others
    assert others.count("↗️ Get a new auth code") == 1


def test_a_managing_difference_is_listed_only_where_opusdns_part_changes():
    rows = [row("com", usual_steps("com")), row("net", usual_steps("net")), row("org", usual_steps("org"), contacts="customer"), row("se", se_steps(), lock=False)]
    managing = section(page(rows), "## Managing a connected domain")
    # .org lets the customer remove a contact where the others require all: OpusDNS does it at neither.
    assert ".org" not in managing.split("TLDs where this differs")[1]
    # .se has no lock, which OpusDNS handles elsewhere: listed.
    assert "➖ See the transfer lock: no transfer lock" in managing


def test_an_action_opusdns_does_at_no_tld_is_the_customers_where_the_tld_allows_it():
    rows = [row("com", usual_steps("com")), row("net", usual_steps("net")), row("org", usual_steps("org"), contacts="customer")]
    managing = section(page(rows), "## Managing a connected domain")
    assert "| Remove a contact role | ↗️ You, at OpenSRS | OpusDNS cannot remove a contact from a connected domain. Remove it at OpenSRS. Not every TLD allows it" in managing


def test_knowledge_base_links_only_where_the_page_exists(tmp_path, monkeypatch):
    (tmp_path / "cctlds").mkdir()
    (tmp_path / "cctlds" / "se.md").write_text("# .se\n", encoding="utf-8")
    monkeypatch.setattr(gen, "KNOWLEDGE_BASE", tmp_path)
    assert gen.kb_link("se", TYPES) == "[.se](/tld-knowledge-base/cctlds/se)"
    assert gen.kb_link("xx", TYPES) == ".xx"


@pytest.mark.parametrize(
    "where",
    ["step", "action", "flow"],
)
def test_a_sentence_without_published_wording_fails_the_run(where):
    rows = [row("com", usual_steps("com"))]
    if where == "step":
        rows[0]["flows"]["transfer_to_opusdns"]["steps"][0]["detail"] = "The unlock endpoint answered."
    elif where == "action":
        rows[0]["actions"]["dns"]["update_nameservers"]["detail"] = "Something internal happened."
    else:
        rows[0]["flows"]["transfer_to_opusdns"]["detail"] = "A new flow sentence."
    with pytest.raises(SystemExit, match="add it to SENTENCES"):
        page(rows)


def test_main_skips_excluded_registrars_and_reports_stale_pages(tmp_path):
    export = {"tld_types": {"com": "gTLD"}, "registrars": {"opensrs": [row("com", usual_steps("com"))], "opusdns": [row("com", usual_steps("com"))]}}
    source = tmp_path / "export.json"
    source.write_text(json.dumps(export), encoding="utf-8")
    config = tmp_path / "scalar.config.json"
    config.write_text(json.dumps({"navigation": {"tabs": [{"to": "/tld-knowledge-base"}], "routes": {}}}, indent=2) + "\n", encoding="utf-8")
    out = tmp_path / "transfers"
    gen.main(["--input", str(source), "--output", str(out), "--config", str(config)])
    assert sorted(p.name for p in out.glob("*.md")) == ["index.md", "opensrs.md"]
    (out / "gone.md").write_text("old\n", encoding="utf-8")
    with pytest.raises(SystemExit, match="gone.md"):
        gen.main(["--input", str(source), "--output", str(out), "--config", str(config)])


def test_config_gets_the_tab_after_tld_info_and_is_idempotent(tmp_path):
    config = {
        "navigation": {
            "tabs": [{"title": "Guides", "to": "/"}, {"title": "TLD Info", "to": "/tld-knowledge-base"}, {"title": "Changelog", "to": "/changelog"}],
            "routes": {"/": {"type": "group"}},
        }
    }
    path = tmp_path / "scalar.config.json"
    path.write_text(json.dumps(config, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    assert gen.update_config(path, ["opensrs", "enom"]) is True
    written = json.loads(path.read_text(encoding="utf-8"))
    assert [tab["title"] for tab in written["navigation"]["tabs"]] == ["Guides", "TLD Info", "Transfers", "Changelog"]
    assert list(written["navigation"]["routes"]["/transfers"]["children"]) == ["/overview", "/enom", "/opensrs"]
    assert gen.update_config(path, ["opensrs", "enom"]) is False
