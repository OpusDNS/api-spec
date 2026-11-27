"""Unit tests for ``tld_knowledge_base.render``.

Run from the ``scripts/`` directory (or repo root) with ``python -m pytest``.
"""

from tld_knowledge_base import render


def _spec(characters: dict) -> dict:
    return {
        "tld_configuration": {
            "tlds": [{"name": "xn--q9jyb4c", "type": "gTLD"}],
            "characters": characters,
            "idn": {"idn_capable": True},
        }
    }


def test_idn_length_renders_next_to_the_ascii_limit() -> None:
    page = render.render(_spec({"min": 3, "max": 63, "idn": {"min": 1, "max": 15}}))
    assert "| Domain Length | 3–63 characters (ASCII) |\n| IDN Length | 1–15 characters |" in page


def test_without_idn_limit_domain_length_is_unchanged() -> None:
    page = render.render(_spec({"min": 1, "max": 63}))
    assert "| Domain Length | 1–63 characters |" in page
    assert "IDN Length" not in page


def test_the_transfer_policy_links_the_tlds_transfer_page(monkeypatch) -> None:
    pages = {"xn--q9jyb4c": {"title": "gTLDs and most ccTLDs", "path": "/transfers/patterns/gtlds"}}
    monkeypatch.setattr(render, "_transfer_pages", lambda: pages)
    page = render.render(_spec({"min": 1, "max": 63}))
    assert "| Transfer to OpusDNS | [gTLDs and most ccTLDs](/transfers/patterns/gtlds) |" in page
    monkeypatch.setattr(render, "_transfer_pages", lambda: {})
    assert "Transfer to OpusDNS" not in render.render(_spec({"min": 1, "max": 63}))
