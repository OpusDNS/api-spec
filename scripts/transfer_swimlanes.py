#!/usr/bin/env python3
"""Draw the transfer swimlanes: theme-neutral SVGs with solid boxes, white text
and grey lanes on a transparent background.

generate_transfer_pages.py draws one per transfer pattern. Run this file to
redraw the two drawn by hand:

    python scripts/transfer_swimlanes.py scalar/content/assets/images
"""

from __future__ import annotations

import sys
from pathlib import Path

BLUE, AMBER, TEAL, PURPLE, GREY = "#2547c9", "#b26b00", "#0e7c78", "#6d3fc0", "#8a8d99"
FONT = "-apple-system, BlinkMacSystemFont, &apos;Segoe UI&apos;, Helvetica, Arial, sans-serif"
LANE_Y = {"reg": 70, "ry": 156, "op": 242}
LANE_H = 80
BW, BH = 80, 52
R = 8  # corner radius of the connectors
LANES = [("reg", ["Your current", "registrar"]), ("ry", ["Registry"]), ("op", ["OpusDNS"])]


def connector(x1: float, y1: float, x2: float, y2: float) -> str:
    """From the right edge of a box at (x1, y1) to the box at (x2, y2):
    straight within a lane, otherwise right, then down or up into its edge."""
    if y1 == y2:
        return f'<path d="M{x1 + BW / 2},{y1} H{x2 - BW / 2 - 3}" fill="none" stroke="{GREY}" stroke-width="1.8" marker-end="url(#a)"/>'
    d = 1 if y2 > y1 else -1
    end = y2 - d * (BH / 2 + 3)
    return (f'<path d="M{x1 + BW / 2},{y1} H{x2 - R} Q{x2},{y1} {x2},{y1 + d * R} V{end}" '
            f'fill="none" stroke="{GREY}" stroke-width="1.8" marker-end="url(#a)"/>')


def svg(title: str, desc: str, lanes: list, steps: list, legend: list, footer: str | None, labels: dict | None = None) -> str:
    """steps: (lane, colour, [two lines of text]) each; labels: a note right of a step, by its index."""
    x0, dx = 168, 104
    W, H = int(x0 + dx * (len(steps) - 1) + BW / 2 + 18), (360 if footer else 330)
    o = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-labelledby="t d" font-family="{FONT}">',
         f'<title id="t">{title}</title>', f'<desc id="d">{desc}</desc>',
         f'<defs><marker id="a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="{GREY}"/></marker></defs>']
    for key, name in lanes:
        y = LANE_Y[key]
        o.append(f'<rect x="2" y="{y - LANE_H / 2}" width="{W - 4}" height="{LANE_H}" rx="10" fill="{GREY}" fill-opacity="0.12"/>')
        if len(name) == 2:
            o.append(f'<text x="16" y="{y - 3}" font-size="14" font-weight="600" fill="{GREY}">{name[0]}</text>')
            o.append(f'<text x="16" y="{y + 15}" font-size="14" font-weight="600" fill="{GREY}">{name[1]}</text>')
        else:
            o.append(f'<text x="16" y="{y + 5}" font-size="14" font-weight="600" fill="{GREY}">{name[0]}</text>')
    centers = [(x0 + dx * i, LANE_Y[lane]) for i, (lane, _, _) in enumerate(steps)]
    # connectors first, so the boxes sit on top of them
    for (x1, y1), (x2, y2) in zip(centers, centers[1:]):
        o.append(connector(x1, y1, x2, y2))
    for i, ((lane, colour, text), (cx, cy)) in enumerate(zip(steps, centers)):
        o.append(f'<text x="{cx}" y="20" text-anchor="middle" font-size="13" font-weight="600" fill="{GREY}">{i + 1}</text>')
        o.append(f'<rect x="{cx - BW / 2}" y="{cy - BH / 2}" width="{BW}" height="{BH}" rx="8" fill="{colour}"/>')
        o.append(f'<text x="{cx}" y="{cy - 3}" text-anchor="middle" font-size="13" font-weight="600" fill="#ffffff">{text[0]}</text>')
        o.append(f'<text x="{cx}" y="{cy + 14}" text-anchor="middle" font-size="13" font-weight="600" fill="#ffffff">{text[1]}</text>')
    for index, label in (labels or {}).items():
        cx, cy = centers[index]
        o.append(f'<text x="{cx + BW / 2 + 8}" y="{cy - BH / 2 + 4}" font-size="12" font-weight="600" fill="{GREY}">{label}</text>')
    ly, x = 314, 16
    for colour, label in legend:
        o.append(f'<rect x="{x}" y="{ly - 11}" width="15" height="15" rx="3" fill="{colour}"/>')
        o.append(f'<text x="{x + 22}" y="{ly + 1}" font-size="13" fill="{GREY}">{label}</text>')
        x += 22 + len(label) * 7.4 + 26
    if footer:
        o.append(f'<text x="16" y="{ly + 30}" font-size="13" fill="{GREY}">{footer}</text>')
    o.append("</svg>")
    return "\n".join(o) + "\n"


def main(images: Path) -> None:
    (images / "gtld-transfer.svg").write_text(svg(
        "A gTLD transfer to OpusDNS under ICANN&apos;s Transfer Policy",
        "Swimlane in three lanes: your current registrar, the registry and OpusDNS. You unlock the domain and get the auth code at your current registrar. OpusDNS requests the transfer at the registry with the auth code, and the transfer is pending. Your current registrar approves or denies it within five days. The registry then transfers the domain, at once after an approval or after five days, and the domain is in your OpusDNS account.",
        LANES,
        [("reg", AMBER, ["Unlock the", "domain"]), ("reg", AMBER, ["Get the", "auth code"]), ("op", BLUE, ["Request the", "transfer"]),
         ("ry", TEAL, ["Transfer", "pending"]), ("reg", PURPLE, ["Approve", "or deny"]), ("ry", TEAL, ["Transfer", "the domain"]),
         ("op", BLUE, ["In your", "account"])],
        [(AMBER, "You"), (PURPLE, "Your current registrar"), (TEAL, "The registry"), (BLUE, "OpusDNS")],
        None,
        labels={4: "within 5 days"}), encoding="utf-8")
    (images / "connected-domain-transfer.svg").write_text(svg(
        "Transferring a connected domain to OpusDNS",
        "Swimlane in three lanes: your current registrar, the registry and OpusDNS. You send the transfer request. OpusDNS then checks the statuses, removes the transfer lock and fetches the auth code at your current registrar, requests the transfer at the registry and approves it at your current registrar. The registry transfers the domain, and it is in your OpusDNS account.",
        LANES,
        [("op", AMBER, ["Your", "request"]), ("reg", BLUE, ["Check", "statuses"]), ("reg", BLUE, ["Remove", "the lock"]),
         ("reg", BLUE, ["Fetch the", "auth code"]), ("ry", BLUE, ["Request", "transfer"]), ("reg", BLUE, ["Approve", "transfer"]),
         ("ry", TEAL, ["Transfer", "the domain"]), ("op", BLUE, ["In your", "account"])],
        [(BLUE, "OpusDNS"), (AMBER, "You"), (TEAL, "The registry")],
        "Where OpusDNS can’t take a step at your registrar, you take it there yourself."), encoding="utf-8")


if __name__ == "__main__":
    main(Path(sys.argv[1]))
