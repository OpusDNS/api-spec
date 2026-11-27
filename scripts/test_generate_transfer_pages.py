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


def row(tld, steps, *, lock=True, privacy=True, contacts="opusdns_none", flow_detail=FLOW_DETAIL, policies=None, push=False):
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
        "transfer": {"push_transfer_out": {**action(None, ""), "supported_by_registry": push}},
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
    policies = {"authinfo_required": True, "authinfo_set_by_registrar": True, "transfer_ack": "both", **(policies or {})}
    policies["transfer_lock_policy"] = {"supported_by_registry": lock}
    return {"tld": tld, "actions": actions, "specification": {"transfer_policies": policies},
            "flows": {"transfer_to_opusdns": {"steps": steps, "detail": flow_detail}}}


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


@pytest.fixture(autouse=True)
def knowledge_base(tmp_path, monkeypatch):
    root = tmp_path / "kb"
    root.mkdir()
    monkeypatch.setattr(gen, "KNOWLEDGE_BASE", root)
    return root


def kb_page(root, tld, registry, site, folder="cctlds"):
    (root / folder).mkdir(exist_ok=True)
    rows = (f"| Registry | {registry} |\n" if registry else "") + (f"| Registry Website | [{site}]({site}) |\n" if site else "")
    (root / folder / f"{tld}.md").write_text(f"# .{tld}\n\n| Property | Value |\n| --- | --- |\n{rows}", encoding="utf-8")


def renamed(found, name):
    """A row with another registrar's name in its sentences."""
    return json.loads(json.dumps(found).replace("OpenSRS", name))


def page(rows):
    return gen.render_registrar("opensrs", rows, TYPES)


def section(text, start, end=None):
    part = text.split(start, 1)[1]
    return part.split(end, 1)[0] if end else part


MATRIX = ("## By transfer pattern", "Until you transfer a domain")


def test_every_tld_is_on_the_registrar_page():
    text = page([row("com", usual_steps("com")), row("net", usual_steps("net")), row("org", usual_steps("org")),
                 row("se", se_steps(), lock=False)])
    assert "At most" not in text and "## The steps at most TLDs" not in text
    matrix = section(text, *MATRIX)
    assert "Your TLD's transfer pattern sets which steps a transfer has. ➖ marks a step the TLD doesn't have." in matrix
    assert "Search this page for your TLD. If it isn't listed exactly, it is in the first row." in matrix
    # The largest pattern stands for every TLD the other rows don't list.
    assert ("| [gTLDs and most ccTLDs](/transfers/patterns/gtlds) | Every other TLD, such as .com, "
            ".net and .org | ✅ OpusDNS | ✅ OpusDNS | ↗️ You, optional |") in matrix
    assert ("| [Auth code and approval](/transfers/patterns/auth-code-approval) | .se "
            "| ➖ | ↗️ You, at OpenSRS (a new one) | ➖ |") in matrix
    assert "These TLDs differ" not in matrix and "WHOIS privacy" not in matrix


def test_a_registrar_with_one_pattern_lists_its_tlds():
    text = page([row("com", usual_steps("com")), row("net", usual_steps("net"))])
    assert "| .com, .net |" in section(text, *MATRIX)
    assert "Every other TLD" not in text


def test_the_intro_points_to_the_table_for_every_tld():
    intro = page([row("com", usual_steps("com")), row("net", usual_steps("net"))]).split("\n")[2]
    assert intro == ("[Connect](/products/connected-registrars/connect) your OpenSRS account and "
                     "[request the transfer](/products/connected-registrars/transfer-to-opusdns). Which steps OpusDNS then takes "
                     "at OpenSRS depends on your TLD. The table below shows them for every TLD. Send the auth code as "
                     "`auth_code` only where it shows ↗️ under Get the auth code. In the API, OpenSRS is `OPENSRS`.")


def test_approval_is_optional_at_gtlds_only():
    text = page([row("com", usual_steps("com")), row("net", usual_steps("net")), row("fr", usual_steps("fr"))])
    differing = section(text, "These TLDs differ from their pattern's row:", "Until you transfer a domain")
    assert ("| [gTLDs and most ccTLDs](/transfers/patterns/gtlds) | .fr "
            "| ✅ OpusDNS | ✅ OpusDNS | ↗️ You, at OpenSRS |") in differing


def test_the_privacy_step_lists_no_tld_and_is_said_under_the_matrix():
    note = "At TLDs with a WHOIS privacy service, OpenSRS refuses to remove the lock while privacy is on."
    privacy = step("update_privacy", "customer", "OpenSRS refuses to remove the lock while WHOIS privacy is on. Turn it off at OpenSRS first.")
    rows = [
        row("com", usual_steps("com", privacy_step=True)),
        row("net", usual_steps("net", privacy_step=True)),
        row("org", usual_steps("org"), privacy=False),
    ]
    matrix = section(page(rows), *MATRIX)
    # .org has no privacy service, so no privacy step: it is no exception to its pattern.
    assert "These TLDs differ" not in matrix and note in matrix
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
    rows = [row("com", usual_steps("com")), row("net", usual_steps("net")), row("uk", push, push=True),
            row("xx", [], flow_detail=".xx has no transfers.", policies={"supported": False})]
    matrix = section(page(rows), *MATRIX)
    assert "| .uk | ✅ OpusDNS | ➖ | ✅ OpusDNS (push) |" in matrix
    assert "the domain is pushed to OpusDNS's tag instead of approved." in matrix
    assert ".xx has no transfer at its registry. See [Transfer to OpusDNS](/transfers/overview#transfer-patterns) for what to do instead." in matrix
    assert "| .xx |" not in matrix


def test_a_step_outside_the_matrix_columns_fails_the_run():
    # .se is alone in its row, so only a comparison with the usual steps catches it.
    se = se_steps()
    se[1] = step("request_transfer", "customer", "OpusDNS sends the transfer to the .se registry.")
    with pytest.raises(SystemExit, match="add a column"):
        page([row("com", usual_steps("com")), row("net", usual_steps("net")), row("se", se, lock=False)])


def test_a_missing_registry_step_is_no_error():
    org = [s for s in usual_steps("org") if s["action"] != "complete_transfer"]
    assert ".org" in page([row("com", usual_steps("com")), row("net", usual_steps("net")), row("org", org)])


def test_every_tld_of_a_row_after_the_first_is_listed():
    many = [f"x{i}" for i in range(8)]
    no_approval = {"transfer_ack": "none", "transfer_nack": "none"}
    rows = [row(t, usual_steps(t)) for t in [f"g{i}" for i in range(9)]] + [row(t, se_steps(t), lock=False, policies=no_approval) for t in many]
    matrix = section(gen.render_registrar("opensrs", rows, {**TYPES, **{t: "ccTLD" for t in many}}), *MATRIX)
    assert all(f".{t}" in matrix for t in many)
    assert "Every other TLD, such as" in matrix


def test_a_registrar_without_an_answer_for_a_tld_fails_the_run(tmp_path):
    export_file = tmp_path / "export.json"
    export_file.write_text(json.dumps({"tld_types": TYPES, "registrars": {
        "opensrs": [row("com", usual_steps("com")), row("net", usual_steps("net"))],
        "enom": [renamed(row("com", usual_steps("com")), "eNom")]}}), encoding="utf-8")
    with pytest.raises(SystemExit, match="eNom: the export has no answer for \\['net'\\]"):
        gen.main(["--input", str(export_file), "--output", str(tmp_path / "out"), "--config", str(tmp_path / "c.json"),
                  "--tld-pages-file", str(tmp_path / "p.json"), "--managing-page", str(tmp_path / "m.md")])


def test_a_flow_without_steps_needs_a_short_reason():
    with pytest.raises(SystemExit, match="short reason"):
        page([row("com", usual_steps("com")), row("xx", [])])


def managing(rows, more=None):
    return gen.render_managing({"tld_types": TYPES, "registrars": {"opensrs": rows, **(more or {})}})


def test_managing_follows_the_capability_groups():
    text = section(managing([row("com", usual_steps("com")), row("net", usual_steps("net"))]), "## OpenSRS")
    assert [line for line in text.splitlines() if line.startswith("**")] == ["**Transfer lock**", "**Nameservers**", "**Contacts**", "**WHOIS privacy**"]
    assert "To transfer a domain from OpenSRS, see [Transfer from OpenSRS](/transfers/registrars/opensrs)." in text


def test_a_managing_difference_is_listed_only_where_opusdns_part_changes():
    rows = [row("com", usual_steps("com")), row("net", usual_steps("net")), row("org", usual_steps("org"), contacts="customer"), row("se", se_steps(), lock=False)]
    text = section(managing(rows), "## OpenSRS")
    # .org lets the customer remove a contact where the others require all: OpusDNS does it at neither.
    assert all(".org" not in part for part in text.split("TLDs where this differs")[1:])
    # .se has no lock, which OpusDNS handles elsewhere: listed, the shared reason said once.
    assert "| ➖ No transfer lock |" in text and "See the transfer lock" not in text.split("TLDs where this differs")[1]


def test_a_reason_is_said_once_only_where_the_whole_group_shares_it():
    def no_lock(tld, entity=None):
        return action(entity, f".{tld} has no transfer lock.")

    customer = action("customer", "OpusDNS cannot change the nameservers at OpenSRS. Change them at OpenSRS.")
    rows = [row("com", usual_steps("com")), row("net", usual_steps("net")), row("org", usual_steps("org"))]
    rows += [row(tld, usual_steps(tld)) for tld in ("xa", "xb", "xc")]
    rows[3]["actions"]["status"]["update_transfer_lock"] = no_lock("xa")  # one of two actions
    rows[4]["actions"]["dns"] = {"read_nameservers": customer, "update_nameservers": customer}  # no reason
    rows[5]["actions"]["status"] = {"read_transfer_lock": no_lock("xc"), "update_transfer_lock": no_lock("xc", "registry")}  # two entities
    text = managing(rows)
    lock, nameservers = section(text, "**Transfer lock**", "**Nameservers**"), section(text, "**Nameservers**", "**Contacts**")
    assert "| .xa | ➖ Set or remove the transfer lock: no transfer lock |" in lock
    assert "| .xb | ↗️ See the nameservers<br>↗️ Change the nameservers |" in nameservers
    assert "| .xc | ➖ See the transfer lock: no transfer lock<br>⚙️ Set or remove the transfer lock: no transfer lock |" in lock


def test_an_action_opusdns_does_at_no_tld_is_the_customers_where_the_tld_allows_it():
    rows = [row("com", usual_steps("com")), row("net", usual_steps("net")), row("org", usual_steps("org"), contacts="customer")]
    assert ("| ↗️ Remove a contact role | OpusDNS can't remove a contact from a connected domain. Remove it at OpenSRS. "
            "Not every TLD allows it. See the [TLD Knowledge Base](/tld-knowledge-base). |") in managing(rows)


def test_the_managing_page_lists_what_is_the_same_everywhere_and_a_matrix_of_the_rest():
    enom = [renamed(row(t, usual_steps(t)), "eNom") for t in ("com", "net")]
    for r in enom:
        r["actions"]["dns"]["update_nameservers"] = action("customer", "OpusDNS cannot change the nameservers at eNom. Change them at eNom.")
    text = managing([row("com", usual_steps("com")), row("net", usual_steps("net"))], {"enom": enom})
    same = section(text, "## At every registrar", "## Depends on the registrar")
    assert "- ✅ See the nameservers" in same and "- ↗️ Change the registrant" in same and "Change the nameservers" not in same
    matrix = section(text, "## Depends on the registrar", "## eNom")
    assert "| Registrar | Change the nameservers |" in matrix
    assert "| [eNom](#enom) | ↗️ |" in matrix and "| [OpenSRS](#opensrs) | ✅ |" in matrix
    assert text.index("## eNom") < text.index("## OpenSRS")


def test_the_registrar_page_links_its_section_on_the_managing_page():
    text = gen.render_registrar("realtimeregister", [renamed(row("com", usual_steps("com")), "Realtime Register")], TYPES)
    assert "## Managing a connected domain" not in text
    assert ("See [What OpusDNS can do at Realtime Register](/products/connected-registrars/registrars#realtime-register).") in text
    assert gen.anchor("CentralNic Reseller") == "centralnic-reseller" and gen.anchor("NIC Direct") == "nic-direct"


def test_knowledge_base_links_only_where_the_page_exists(tmp_path, monkeypatch):
    for folder, tld in (("cctlds", "se"), ("gtlds", "com")):
        (tmp_path / folder).mkdir()
        (tmp_path / folder / f"{tld}.md").write_text(f"# .{tld}\n", encoding="utf-8")
    monkeypatch.setattr(gen, "KNOWLEDGE_BASE", tmp_path)
    assert gen.kb_link("se", TYPES) == "[.se](/tld-knowledge-base/cctlds/se)"
    assert gen.kb_link("com", TYPES) == "[.com](/tld-knowledge-base/gtlds/com)"
    assert gen.kb_link("xx", TYPES) == ".xx"


def test_the_overview_explains_gtlds_cctlds_and_the_connected_account():
    rows = [row("com", usual_steps("com")), row("xx", [], flow_detail=".xx has no transfers.", policies={"supported": False})]
    data = {"tld_types": TYPES, "registrars": {"opensrs": rows, "enom": rows}}
    text = gen.render_overview(data, gen.registry_facts(data))
    assert "(/images/gtld-transfer.svg)" in text
    assert "## ccTLDs" in text and "## With a connected account" in text
    assert "> [!WARNING]" in text and "[page for your registrar](#your-registrar)" in text and "## Your registrar" in text
    assert "- [eNom](/transfers/registrars/enom)" in text and "- [OpenSRS](/transfers/registrars/opensrs)" in text
    assert "## Transfer patterns" in text and "- [gTLDs and most ccTLDs](/transfers/patterns/gtlds): 1 TLD\n" in text
    assert ".xx has no transfer at its registry. To move such a domain to OpusDNS, contact [OpusDNS support](https://support.opusdns.com/)." in text
    assert "ISNIC" not in text
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
        managing(rows) if where == "action" else page(rows)


def test_main_skips_excluded_registrars_and_reports_stale_pages(tmp_path):
    is_row = row("xx", [], flow_detail=".xx has no transfers.", policies={"supported": False})
    export = {"tld_types": {"com": "gTLD", "xx": "ccTLD"},
              "registrars": {"opensrs": [row("com", usual_steps("com")), is_row], "opusdns": [row("com", usual_steps("com"))]}}
    source = tmp_path / "export.json"
    source.write_text(json.dumps(export), encoding="utf-8")
    config = tmp_path / "scalar.config.json"
    config.write_text(json.dumps({"navigation": {"tabs": [{"to": "/tld-knowledge-base"}], "routes": {}}}, indent=2) + "\n", encoding="utf-8")
    out = tmp_path / "transfers"
    pages = tmp_path / "pages.json"
    swimlanes = tmp_path / "swimlanes"
    args = ["--input", str(source), "--output", str(out), "--config", str(config), "--tld-pages-file", str(pages),
            "--managing-page", str(tmp_path / "managing.md"), "--swimlanes", str(swimlanes)]
    gen.main(args)
    assert sorted(str(p.relative_to(out)) for p in out.rglob("*.md")) == [
        "index.md", "patterns/gtlds.md", "registrars/opensrs.md"]
    assert json.loads(pages.read_text(encoding="utf-8")) == {"com": {"title": "gTLDs and most ccTLDs", "path": "/transfers/patterns/gtlds"}}
    assert sorted(p.name for p in swimlanes.glob("*.svg")) == ["gtlds.svg"]
    (swimlanes / "gone.svg").write_text("<svg/>\n", encoding="utf-8")
    with pytest.raises(SystemExit, match="gone.svg"):
        gen.main(args)
    (swimlanes / "gone.svg").rename(tmp_path / "gone.svg")
    (out / "registrars" / "gone.md").write_text("old\n", encoding="utf-8")
    with pytest.raises(SystemExit, match="registrars/gone.md"):
        gen.main(args)


def test_config_gets_the_tab_after_tld_info_and_is_idempotent(tmp_path):
    config = {
        "navigation": {
            "tabs": [{"title": "Guides", "to": "/"}, {"title": "TLD Info", "to": "/tld-knowledge-base"}, {"title": "Changelog", "to": "/changelog"}],
            "routes": {"/": {"type": "group"}},
        }
    }
    path = tmp_path / "scalar.config.json"
    path.write_text(json.dumps(config, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    patterns = [gen.PATTERNS[("registrar", True, True)], gen.PATTERNS["push"]]
    assert gen.update_config(path, ["opensrs", "enom"], patterns) is True
    written = json.loads(path.read_text(encoding="utf-8"))
    assert [tab["title"] for tab in written["navigation"]["tabs"]] == ["Guides", "TLD Info", "Transfers", "Changelog"]
    children = written["navigation"]["routes"]["/transfers"]["children"]
    assert list(children) == ["/overview", "/patterns", "/registrars"]
    by_pattern = children["/patterns"]["children"]
    assert list(by_pattern) == ["/gtlds", "/push"]
    assert by_pattern["/gtlds"] == {"type": "page", "title": "gTLDs and most ccTLDs",
                                    "filepath": "content/transfers/patterns/gtlds.md", "showInSidebar": True}
    assert list(children["/registrars"]["children"]) == ["/enom", "/opensrs"]
    assert gen.update_config(path, ["opensrs", "enom"], patterns) is False


# --- transfer patterns -------------------------------------------------------


def export(*rows_per_registrar):
    return {"tld_types": TYPES, "registrars": {key: rows for key, rows in zip(("opensrs", "enom"), rows_per_registrar)}}


def test_registrars_must_agree_on_the_registrys_side():
    data = export([row("com", usual_steps("com"))], [row("com", usual_steps("com"), policies={"transfer_ack": "none"})])
    with pytest.raises(SystemExit, match="disagree"):
        gen.registry_facts(data)


def test_a_pattern_without_wording_fails_the_run():
    data = export([row("com", usual_steps("com"), policies={"authinfo_required": False, "transfer_ack": "none", "transfer_nack": "none"})])
    with pytest.raises(SystemExit, match="add it to PATTERNS"):
        gen.registry_facts(data)


def test_patterns_come_most_common_first_and_push_wins_over_the_auth_code():
    no_approval = {"transfer_ack": "none", "transfer_nack": "none"}
    rows = [row("com", usual_steps("com")), row("net", usual_steps("net")), row("se", se_steps(), lock=False, policies=no_approval),
            row("xx", [], push=True), row("fr", [], flow_detail=".fr has no transfers.", policies={"supported": False})]
    facts = gen.registry_facts(export(rows))
    assert [(p.slug, tlds) for p, tlds in gen.ordered_patterns(facts)] == [("gtlds", ["com", "net"]), ("auth-code", ["se"]), ("push", ["xx"])]
    assert facts["fr"].key is None


@pytest.mark.parametrize(("ack", "nack", "approval"), [("none", "none", False), (None, None, False), ("none", "registrar", False), ("registrar", "none", True)])
def test_only_an_approval_by_the_losing_side_counts_as_approval(ack, nack, approval):
    policies = {"transfer_ack": ack, "transfer_nack": nack}
    assert gen.pattern_key(row("xx", usual_steps("xx"), policies=policies)) == ("registrar", approval, True)


def test_the_lock_splits_patterns_and_a_pattern_page_shows_the_registrys_side_only(knowledge_base):
    kb_page(knowledge_base, "fr", "AFNIC", "https://www.afnic.fr")
    rows = [row("com", usual_steps("com")), row("fr", usual_steps("fr")[1:], lock=False), row("xx", usual_steps("xx")[1:], lock=False)]
    data = export(rows, rows)
    facts = gen.registry_facts(data)
    assert [(p.slug, tlds) for p, tlds in gen.ordered_patterns(facts)] == [("auth-code-approval", ["fr", "xx"]), ("gtlds", ["com"])]
    pattern, tlds = gen.ordered_patterns(facts)[0]
    text = gen.render_pattern(pattern, tlds, data, facts)
    assert "Your current registrar can then approve or deny the transfer. The registry has no transfer lock." in text
    assert "Remove the transfer lock" not in text and "| Registrar |" not in text
    assert "Which of these steps OpusDNS takes for you depends on your registrar." in text
    assert "The [TLD Knowledge Base](/tld-knowledge-base) has each TLD's transfer rules" in text
    assert "At gTLDs" not in text  # only ccTLDs here
    # .fr has a Knowledge Base page with its registry, .xx has none.
    registries = section(text, "## Registries")
    assert ".fr" in registries and ".xx" not in registries


def test_registries_show_once_each_by_size_then_name_with_their_usual_website(knowledge_base):
    pages = [("aa", "Alpha", "https://other.example"), ("ab", "Alpha", "https://a.example"), ("ac", "Alpha", "https://a.example"),
             ("dd", "beta", None), ("ee", "Delta", None), *[(f"g{i}", "Gamma", "https://g.example") for i in range(6)]]
    for tld, registry, site in pages:
        kb_page(knowledge_base, tld, registry, site)
    types = {tld: "ccTLD" for tld, _, _ in pages}
    data = {"tld_types": types, "registrars": {"opensrs": [row(t, usual_steps(t)) for t in types]}}
    facts = gen.registry_facts(data)
    pattern, tlds = gen.ordered_patterns(facts)[0]
    registries = [line for line in section(gen.render_pattern(pattern, tlds, data, facts), "## Registries").splitlines() if line.startswith("- ")]
    assert [line.split("]")[0].split(":")[0] for line in registries] == ["- [Gamma", "- [Alpha", "- beta", "- Delta"]
    assert registries[0].endswith("[.g4](/tld-knowledge-base/cctlds/g4) and 1 more")
    assert registries[1].startswith("- [Alpha](https://a.example): [.aa]")


def test_a_knowledge_base_page_without_its_registry_fails_the_run(knowledge_base):
    kb_page(knowledge_base, "aa", None, None)
    with pytest.raises(SystemExit, match="names no registry"):
        gen.registry_of("aa", {"aa": "ccTLD"})


def test_a_pattern_page_where_every_tld_has_a_lock_names_many_gtlds_by_example():
    tlds = [f"g{i}" for i in range(21)]
    rows = [row(t, usual_steps(t)) for t in ["com", "net", "org", *tlds]]
    gen_types = {**TYPES, **{t: "gTLD" for t in tlds}}
    data = {"tld_types": gen_types, "registrars": {"opensrs": rows}}
    facts = gen.registry_facts(data)
    pattern, found = gen.ordered_patterns(facts)[0]
    text = gen.render_pattern(pattern, found, data, facts)
    assert "1. Remove the transfer lock at your current registrar.\n" in text
    assert "24 gTLDs, such as .com, .net and .org." in text


def uk_push_rows(push=True):
    steps = [step("update_transfer_lock", "opusdns", "OpusDNS removes the transfer lock at OpenSRS."),
             step("request_transfer", "opusdns", "OpusDNS books the domain and has it pushed. The .uk registry gets no transfer request."),
             step("push_transfer_out", "opusdns", "OpusDNS pushes the domain to its tag at OpenSRS."),
             step("complete_transfer", "registry", "The .uk registry moves the domain to OpusDNS's tag.")]
    return [row("com", usual_steps("com")), row("uk", steps if push else usual_steps("uk"), push=push)]


def test_an_announced_registry_change_shows_until_the_export_has_it():
    data = export(uk_push_rows())
    facts = gen.registry_facts(data)
    pattern, tlds = next((p, t) for p, t in gen.ordered_patterns(facts) if p.slug == "push")
    pattern_page = gen.render_pattern(pattern, tlds, data, facts)
    assert "> [!NOTE]\n> .uk: From 9 February 2027, Nominet replaces the push with an auth code." in pattern_page
    with pytest.raises(SystemExit, match="remove it from UPCOMING"):
        gen.registry_facts(export(uk_push_rows(push=False)))


@pytest.mark.parametrize(("reason", "count", "expected"), [
    ("no transfers", 1, "[.a] has no transfer at its registry."),
    ("no transfers", 2, "[.a] have no transfer at their registries."),
    ("only on paper", 1, "Only on paper at [.a]."),
])
def test_a_tld_without_transfers_says_so_in_plain_words(reason, count, expected):
    assert gen.no_transfer_line(reason, "[.a]", count) == expected


def test_the_holder_approves_where_the_registry_says_so():
    lu = row("lu", [step("request_transfer", "opusdns", "OpusDNS sends the transfer to the .lu registry."),
                    step("approve_transfer_out", "registrant", "The holder of the .lu domain approves the transfer."),
                    step("complete_transfer", "registry", "The .lu registry moves the domain to OpusDNS.")],
             lock=False, policies={"authinfo_required": False, "transfer_ack": "registrant"})
    xx = row("xx", [step("request_transfer", "opusdns", "OpusDNS sends the transfer to the .xx registry."),
                    step("approve_transfer_out", "customer", "Approve the transfer at OpenSRS."),
                    step("complete_transfer", "registry", "The .xx registry moves the domain to OpusDNS.")],
             lock=False, policies={"authinfo_required": False})
    data = export([lu, xx])
    facts = gen.registry_facts(data)
    pattern, tlds = gen.ordered_patterns(facts)[0]
    page_text = gen.render_pattern(pattern, tlds, data, facts)
    assert "Your current registrar or the domain's holder then approves or denies the transfer, depending on the TLD." in page_text
    only_lu = export([lu])
    lu_facts = gen.registry_facts(only_lu)
    lu_page = gen.render_pattern(*gen.ordered_patterns(lu_facts)[0], only_lu, lu_facts)
    assert "The domain's holder then approves or denies the transfer by email." in lu_page
    assert "2. The domain's holder approves or denies the transfer by email." in lu_page
    only_xx = export([xx])
    xx_facts = gen.registry_facts(only_xx)
    xx_page = gen.render_pattern(*gen.ordered_patterns(xx_facts)[0], only_xx, xx_facts)
    assert "2. Your current registrar approves or denies the transfer. Some registrars" in xx_page


def test_a_pattern_row_takes_the_cells_most_of_its_tlds_have():
    # .aa sorts first but is the exception: the row must not take its cells.
    aa = usual_steps("aa")
    aa[3] = step("approve_transfer_out", "opusdns", "OpusDNS approves the transfer at OpenSRS.")
    text = page([row("aa", aa), row("com", usual_steps("com")), row("net", usual_steps("net"))])
    assert "| ✅ OpusDNS | ✅ OpusDNS | ↗️ You, optional |" in section(text, *MATRIX).split("These TLDs differ")[0]
    assert "| .aa | ✅ OpusDNS | ✅ OpusDNS | ✅ OpusDNS |" in section(text, *MATRIX)


def test_a_gtld_says_the_registry_completes_after_five_days():
    data = export([row("com", usual_steps("com")), row("net", usual_steps("net"))])
    facts = gen.registry_facts(data)
    assert "At gTLDs, the registry completes it after five days without an answer." in gen.render_pattern(*gen.ordered_patterns(facts)[0], data, facts)


def test_a_null_lock_policy_reads_as_no_lock():
    xx = row("xx", usual_steps("xx"))
    xx["specification"]["transfer_policies"]["transfer_lock_policy"] = None
    assert gen.pattern_key(xx) == ("registrar", True, False)
    assert gen.registry_side(xx).lock is False


def test_a_holders_step_outside_the_matrix_fails_the_run_too():
    se = se_steps()
    se.insert(2, step("approve_transfer_out", "registrant", "The holder of the .se domain approves the transfer.")
              | {"action": "request_transfer"})
    with pytest.raises(SystemExit, match="add a column"):
        page([row("com", usual_steps("com")), row("net", usual_steps("net")), row("se", se, lock=False)])


def test_a_differing_tld_names_its_own_pattern():
    no_approval = {"transfer_ack": "none", "transfer_nack": "none"}
    rows = [row("com", usual_steps("com")), row("net", usual_steps("net")),
            row("se", se_steps(), lock=False, policies=no_approval), row("nu", se_steps("nu"), lock=False, policies=no_approval),
            row("fr", usual_steps("fr")[1:], lock=False, policies=no_approval)]
    rows[4]["flows"]["transfer_to_opusdns"]["steps"] = [step("read_auth_code", "opusdns", "OpusDNS reads the auth code at OpenSRS.")] + se_steps("fr")[1:]
    differing = section(page(rows), "These TLDs differ from their pattern's row:", "Until you transfer a domain")
    assert "| [Auth code only](/transfers/patterns/auth-code) | .fr |" in differing


def test_the_managing_legend_and_the_same_everywhere_list_count_the_differing_tlds():
    # Only .se's missing lock brings a ➖: every TLD lets the customer remove a contact role.
    rows = [row("com", usual_steps("com"), contacts="customer"), row("net", usual_steps("net"), contacts="customer"),
            row("se", se_steps(), lock=False, contacts="customer")]
    text = managing(rows)
    assert "➖ the TLD doesn't have it" in text.split("\n\n")[2]
    # .se has no lock, so the lock is no "at every registrar" action.
    assert "transfer lock" not in section(text, "## At every registrar", "## Depends on the registrar")


def swimlane(key, lock=True, gtld=False, who="registrar"):
    pattern = gen.PATTERNS[key]
    return gen.pattern_swimlane(pattern, key, lock, gtld, who)


def boxes(svg_text):
    import re
    return re.findall(r'fill="#ffffff">([^<]+)</text>', svg_text)


def test_a_pattern_swimlane_draws_its_steps():
    svg_text, alt = swimlane(("registrar", True, True), gtld=True)
    assert boxes(svg_text) == ["Unlock the", "domain", "Get the", "auth code", "Request the", "transfer", "Transfer", "pending",
                               "Approve", "or deny", "Transfer", "the domain", "In your", "account"]
    assert ">within 5 days at gTLDs</text>" in svg_text and alt.startswith("Swimlane in three lanes")
    svg_text, _ = swimlane(("registry", False, False), lock=False)
    assert boxes(svg_text)[:4] == ["Get the", "auth code", "Request the", "transfer"] and ">set by the registry</text>" in svg_text
    assert "Your current registrar</text>" not in svg_text  # no purple box, so not in the legend
    svg_text, alt = swimlane(("none", True, False), lock=False, who="holder")
    assert "Holder" in boxes(svg_text) and "You or the domain&apos;s holder" not in svg_text and "You or the domain's holder" in svg_text
    assert "The domain's holder approves or denies it by email." in alt
    svg_text, _ = swimlane(("none", True, False), lock=False, who="either")
    assert ">or the holder</text>" in svg_text and "within 5 days" not in svg_text
    svg_text, _ = swimlane("push")
    assert boxes(svg_text) == ["Unlock the", "domain", "Record the", "transfer", "Push the", "domain", "Move the", "domain", "In your", "account"]


def test_a_pattern_page_shows_its_swimlane():
    data = export([row("com", usual_steps("com")), row("net", usual_steps("net"))])
    facts = gen.registry_facts(data)
    text = gen.render_pattern(*gen.ordered_patterns(facts)[0], data, facts)
    assert "](/images/transfer-patterns/gtlds.svg)" in text and "![Swimlane in three lanes" in text


def test_a_written_tld_links_its_knowledge_base_page_where_it_has_one(knowledge_base):
    kb_page(knowledge_base, "de", "DENIC eG", "https://www.denic.de/")
    text = gen.link_tlds("- `.de` and `.xx` have no transfer lock. Use `auth_code`.", {"de": "ccTLD", "xx": "ccTLD"})
    assert text == "- [.de](/tld-knowledge-base/cctlds/de) and `.xx` have no transfer lock. Use `auth_code`."


def test_the_overviews_written_tlds_link_their_knowledge_base_pages(knowledge_base):
    for tld in ("com", "de", "uk"):
        kb_page(knowledge_base, tld, "Some registry", None, folder="gtlds" if tld == "com" else "cctlds")
    data = {"tld_types": {**TYPES, "de": "ccTLD", "uk": "ccTLD"}, "registrars": {"opensrs": [row("com", usual_steps("com"))]}}
    text = gen.render_overview(data, gen.registry_facts(data))
    assert "For gTLDs such as [.com](/tld-knowledge-base/gtlds/com)," in text
    assert "- [.de](/tld-knowledge-base/cctlds/de) and `.ch` have no transfer lock." in text
    assert "a [.uk](/tld-knowledge-base/cctlds/uk) domain is pushed" in text
