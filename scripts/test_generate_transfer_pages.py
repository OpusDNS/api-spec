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


MATRIX = ("## Who takes which step", "## The steps at most TLDs")
STEPS = ("## The steps at most TLDs", "## Managing")


def test_the_usual_steps_and_the_tlds_that_differ():
    text = page([row("com", usual_steps("com")), row("net", usual_steps("net")), row("se", se_steps(), lock=False)])
    assert "| 1 | ✅ Remove the transfer lock | OpusDNS removes the transfer lock at OpenSRS. |" in section(text, *STEPS)
    matrix = section(text, *MATRIX)
    assert "| Most TLDs | ✅ OpusDNS | ✅ OpusDNS | ↗️ You, optional |" in matrix
    assert "| ➖ | ↗️ You, at OpenSRS (a new one) | ➖ |" in matrix
    assert ".com" not in matrix and ".net" not in matrix
    assert "WHOIS privacy" not in matrix


def test_the_customers_auth_code_is_sent_with_the_request():
    text = page([row("com", usual_steps("com")), row("net", usual_steps("net")), row("se", se_steps(), lock=False)])
    rows = [row("com", usual_steps("com")), row("net", usual_steps("net"))]
    rows[0]["flows"]["transfer_to_opusdns"]["steps"][1] = step("read_auth_code", "customer", "Get the auth code at OpenSRS.")
    rows[1]["flows"]["transfer_to_opusdns"]["steps"][1] = step("read_auth_code", "customer", "Get the auth code at OpenSRS.")
    assert "Get the auth code at OpenSRS and send it as `auth_code`." in page(rows)
    assert "Leave out the auth code where OpusDNS gets it for you." in text


def test_approval_is_optional_at_gtlds_only():
    text = page([row("com", usual_steps("com")), row("net", usual_steps("net")), row("fr", usual_steps("fr"))])
    assert "| ↗️ Approve the transfer (optional) | Optional: approve it at OpenSRS to finish sooner." in section(text, *STEPS)
    fr = next(line for line in section(text, *MATRIX).splitlines() if ".fr" in line)
    assert fr.endswith("| ✅ OpusDNS | ✅ OpusDNS | ↗️ You, at OpenSRS |")


def test_the_privacy_step_lists_no_tld_and_is_said_under_the_matrix():
    note = "At TLDs with a WHOIS privacy service, OpenSRS refuses to remove the lock while privacy is on."
    privacy = step("update_privacy", "customer", "OpenSRS refuses to remove the lock while WHOIS privacy is on. Turn it off at OpenSRS first.")
    rows = [
        row("com", usual_steps("com", privacy_step=True)),
        row("net", usual_steps("net", privacy_step=True)),
        row("org", usual_steps("org"), privacy=False),
    ]
    matrix = section(page(rows), *MATRIX)
    assert ".org" not in matrix and note in matrix
    # Only a listed TLD has the step: the note still says so.
    rows = [row("com", usual_steps("com")), row("net", usual_steps("net")), row("se", [se_steps()[0], privacy] + se_steps()[1:], lock=False)]
    assert note in section(page(rows), *MATRIX)


def test_tlds_with_the_same_cells_share_a_row():
    rows = [row("com", usual_steps("com")), row("net", usual_steps("net")), row("org", usual_steps("org")), row("se", se_steps(), lock=False), row("nu", se_steps("nu"), lock=False)]
    matrix = section(page(rows), *MATRIX)
    assert matrix.count("(a new one)") == 1
    shared = next(line for line in matrix.splitlines() if "(a new one)" in line)
    assert ".nu" in shared and ".se" in shared


def test_a_pushed_tld_and_a_tld_without_transfers():
    push = [
        step("update_transfer_lock", "opusdns", "OpusDNS removes the transfer lock at OpenSRS."),
        step("request_transfer", "opusdns", "OpusDNS books the domain and has it pushed. The .uk registry gets no transfer request."),
        step("push_transfer_out", "opusdns", "OpusDNS pushes the domain to its tag at OpenSRS."),
        step("complete_transfer", "registry", "The .uk registry moves the domain to OpusDNS's tag."),
    ]
    rows = [row("com", usual_steps("com")), row("net", usual_steps("net")), row("uk", push), row("xx", [], flow_detail=".xx has no transfers.")]
    matrix = section(page(rows), *MATRIX)
    assert "| ✅ OpusDNS | ➖ | ✅ OpusDNS (push) |" in matrix
    assert "the domain is pushed to OpusDNS's tag instead of approved." in matrix
    assert "No transfers at .xx." in matrix and "| .xx |" not in matrix


def test_a_step_outside_the_matrix_columns_fails_the_run():
    # .se is alone in its row, so only a comparison with the usual steps catches it.
    se = se_steps()
    se[1] = step("request_transfer", "customer", "OpusDNS sends the transfer to the .se registry.")
    with pytest.raises(SystemExit, match="add a column"):
        page([row("com", usual_steps("com")), row("net", usual_steps("net")), row("se", se, lock=False)])


def test_a_flow_without_steps_needs_a_short_reason():
    with pytest.raises(SystemExit, match="short reason"):
        page([row("com", usual_steps("com")), row("xx", [])])


def test_managing_follows_the_capability_groups():
    managing = section(page([row("com", usual_steps("com")), row("net", usual_steps("net"))]), "## Managing a connected domain")
    headings = [line for line in managing.splitlines() if line.startswith("### ")]
    assert headings == ["### Transfer lock", "### Nameservers", "### Contacts", "### WHOIS privacy"]


def test_a_managing_difference_is_listed_only_where_opusdns_part_changes():
    rows = [row("com", usual_steps("com")), row("net", usual_steps("net")), row("org", usual_steps("org"), contacts="customer"), row("se", se_steps(), lock=False)]
    managing = section(page(rows), "## Managing a connected domain")
    # .org lets the customer remove a contact where the others require all: OpusDNS does it at neither.
    assert all(".org" not in part for part in managing.split("TLDs where this differs")[1:])
    # .se has no lock, which OpusDNS handles elsewhere: listed, the shared reason said once.
    assert "| ➖ No transfer lock |" in managing and "See the transfer lock" not in managing.split("TLDs where this differs")[1]


def test_a_reason_is_said_once_only_where_the_whole_group_shares_it():
    def no_lock(tld, entity=None):
        return action(entity, f".{tld} has no transfer lock.")

    customer = action("customer", "OpusDNS cannot change the nameservers at OpenSRS. Change them at OpenSRS.")
    rows = [row("com", usual_steps("com")), row("net", usual_steps("net")), row("org", usual_steps("org"))]
    rows += [row(tld, usual_steps(tld)) for tld in ("xa", "xb", "xc")]
    rows[3]["actions"]["status"]["update_transfer_lock"] = no_lock("xa")  # one of two actions
    rows[4]["actions"]["dns"] = {"read_nameservers": customer, "update_nameservers": customer}  # no reason
    rows[5]["actions"]["status"] = {"read_transfer_lock": no_lock("xc"), "update_transfer_lock": no_lock("xc", "registry")}  # two entities
    text = page(rows)
    lock, nameservers = section(text, "### Transfer lock", "### Nameservers"), section(text, "### Nameservers", "### Contacts")
    assert "| .xa | ➖ Set or remove the transfer lock: no transfer lock |" in lock
    assert "| .xb | ↗️ See the nameservers<br>↗️ Change the nameservers |" in nameservers
    assert "| .xc | ➖ See the transfer lock: no transfer lock<br>⚙️ Set or remove the transfer lock: no transfer lock |" in lock


def test_an_action_opusdns_does_at_no_tld_is_the_customers_where_the_tld_allows_it():
    rows = [row("com", usual_steps("com")), row("net", usual_steps("net")), row("org", usual_steps("org"), contacts="customer")]
    managing = section(page(rows), "## Managing a connected domain")
    assert ("| ↗️ Remove a contact role | OpusDNS can't remove a contact from a connected domain. Remove it at OpenSRS. "
            "Not every TLD allows it. See the [TLD Knowledge Base](/tld-knowledge-base). |") in managing


def test_knowledge_base_links_only_where_the_page_exists(tmp_path, monkeypatch):
    for folder, tld in (("cctlds", "se"), ("gtlds", "com")):
        (tmp_path / folder).mkdir()
        (tmp_path / folder / f"{tld}.md").write_text(f"# .{tld}\n", encoding="utf-8")
    monkeypatch.setattr(gen, "KNOWLEDGE_BASE", tmp_path)
    assert gen.kb_link("se", TYPES) == "[.se](/tld-knowledge-base/cctlds/se)"
    assert gen.kb_link("com", TYPES) == "[.com](/tld-knowledge-base/gtlds/com)"
    assert gen.kb_link("xx", TYPES) == ".xx"


def test_the_overview_explains_gtlds_cctlds_and_the_connected_account():
    text = gen.render_overview({"tld_types": TYPES, "registrars": {"opensrs": [row("com", usual_steps("com"))], "enom": [row("com", usual_steps("com"))]}})
    assert "(/images/gtld-transfer.svg)" in text
    assert "## ccTLDs" in text and "## With a connected account" in text
    assert "> [!WARNING]" in text and "[page for your registrar](#your-registrar)" in text and "## Your registrar" in text
    assert "- [eNom](/transfers/enom)" in text and "- [OpenSRS](/transfers/opensrs)" in text
    assert ";" not in text


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
