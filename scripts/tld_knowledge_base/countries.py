"""ISO-3166-1 alpha-2 country names + flag emoji (offline, deterministic).

Used to label ccTLD pages (e.g. ``NL`` -> ``"Netherlands"`` + ``🇳🇱``). gTLDs
fall back to a neutral globe icon and the registry name.
"""

from __future__ import annotations

# Subset of ISO-3166-1 alpha-2 entries used by the OpusDNS TLD lineup. Easy to
# extend — adding a row is enough; no other code needs to change.
COUNTRY_NAMES: dict[str, str] = {
    "AC": "Ascension Island",
    "AE": "United Arab Emirates",
    "AF": "Afghanistan",
    "AG": "Antigua and Barbuda",
    "AI": "Anguilla",
    "AM": "Armenia",
    "AR": "Argentina",
    "AS": "American Samoa",
    "AT": "Austria",
    "AU": "Australia",
    "AW": "Aruba",
    "AX": "Åland Islands",
    "AZ": "Azerbaijan",
    "BA": "Bosnia and Herzegovina",
    "BE": "Belgium",
    "BG": "Bulgaria",
    "BH": "Bahrain",
    "BR": "Brazil",
    "BS": "Bahamas",
    "BY": "Belarus",
    "BZ": "Belize",
    "CA": "Canada",
    "CC": "Cocos (Keeling) Islands",
    "CH": "Switzerland",
    "CL": "Chile",
    "CN": "China",
    "CO": "Colombia",
    "CR": "Costa Rica",
    "CX": "Christmas Island",
    "CY": "Cyprus",
    "CZ": "Czechia",
    "DE": "Germany",
    "DK": "Denmark",
    "DO": "Dominican Republic",
    "EC": "Ecuador",
    "EE": "Estonia",
    "EG": "Egypt",
    "ES": "Spain",
    "EU": "European Union",
    "FI": "Finland",
    "FJ": "Fiji",
    "FM": "Federated States of Micronesia",
    "FO": "Faroe Islands",
    "FR": "France",
    "GB": "United Kingdom",
    "GD": "Grenada",
    "GE": "Georgia",
    "GG": "Guernsey",
    "GI": "Gibraltar",
    "GL": "Greenland",
    "GR": "Greece",
    "GS": "South Georgia and the South Sandwich Islands",
    "GT": "Guatemala",
    "GY": "Guyana",
    "HK": "Hong Kong",
    "HM": "Heard Island and McDonald Islands",
    "HN": "Honduras",
    "HR": "Croatia",
    "HT": "Haiti",
    "HU": "Hungary",
    "ID": "Indonesia",
    "IE": "Ireland",
    "IL": "Israel",
    "IM": "Isle of Man",
    "IN": "India",
    "IO": "British Indian Ocean Territory",
    "IQ": "Iraq",
    "IR": "Iran",
    "IS": "Iceland",
    "IT": "Italy",
    "JE": "Jersey",
    "JM": "Jamaica",
    "JO": "Jordan",
    "JP": "Japan",
    "KE": "Kenya",
    "KG": "Kyrgyzstan",
    "KI": "Kiribati",
    "KR": "South Korea",
    "KZ": "Kazakhstan",
    "LA": "Laos",
    "LC": "Saint Lucia",
    "LI": "Liechtenstein",
    "LK": "Sri Lanka",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "LV": "Latvia",
    "LY": "Libya",
    "MA": "Morocco",
    "MC": "Monaco",
    "MD": "Moldova",
    "ME": "Montenegro",
    "MG": "Madagascar",
    "MK": "North Macedonia",
    "ML": "Mali",
    "MN": "Mongolia",
    "MS": "Montserrat",
    "MT": "Malta",
    "MU": "Mauritius",
    "MX": "Mexico",
    "MY": "Malaysia",
    "NA": "Namibia",
    "NF": "Norfolk Island",
    "NG": "Nigeria",
    "NI": "Nicaragua",
    "NL": "Netherlands",
    "NO": "Norway",
    "NP": "Nepal",
    "NU": "Niue",
    "NZ": "New Zealand",
    "OM": "Oman",
    "PA": "Panama",
    "PE": "Peru",
    "PG": "Papua New Guinea",
    "PH": "Philippines",
    "PK": "Pakistan",
    "PL": "Poland",
    "PM": "Saint Pierre and Miquelon",
    "PR": "Puerto Rico",
    "PT": "Portugal",
    "PW": "Palau",
    "PY": "Paraguay",
    "QA": "Qatar",
    "RE": "Réunion",
    "RO": "Romania",
    "RS": "Serbia",
    "RU": "Russia",
    "SA": "Saudi Arabia",
    "SB": "Solomon Islands",
    "SC": "Seychelles",
    "SE": "Sweden",
    "SG": "Singapore",
    "SH": "Saint Helena",
    "SI": "Slovenia",
    "SK": "Slovakia",
    "SM": "San Marino",
    "SN": "Senegal",
    "SO": "Somalia",
    "SR": "Suriname",
    "ST": "São Tomé and Príncipe",
    "SV": "El Salvador",
    "SX": "Sint Maarten",
    "TC": "Turks and Caicos Islands",
    "TF": "French Southern Territories",
    "TH": "Thailand",
    "TJ": "Tajikistan",
    "TK": "Tokelau",
    "TL": "Timor-Leste",
    "TM": "Turkmenistan",
    "TN": "Tunisia",
    "TO": "Tonga",
    "TR": "Türkiye",
    "TT": "Trinidad and Tobago",
    "TV": "Tuvalu",
    "TW": "Taiwan",
    "TZ": "Tanzania",
    "UA": "Ukraine",
    "UG": "Uganda",
    "US": "United States",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VA": "Vatican City",
    "VC": "Saint Vincent and the Grenadines",
    "VE": "Venezuela",
    "VG": "British Virgin Islands",
    "VI": "U.S. Virgin Islands",
    "VN": "Vietnam",
    "VU": "Vanuatu",
    "WF": "Wallis and Futuna",
    "WS": "Samoa",
    "YE": "Yemen",
    "YT": "Mayotte",
    "ZA": "South Africa",
    "ZM": "Zambia",
    "ZW": "Zimbabwe",
}

# Code points used to compose Unicode regional-indicator flag emoji.
_REGIONAL_INDICATOR_BASE = 0x1F1E6  # 'A'
_ASCII_A = ord("A")


def flag_emoji(country_code: str) -> str:
    """Return the flag emoji for an ISO-3166-1 alpha-2 code, or ``""``."""
    code = (country_code or "").upper()
    if len(code) != 2 or not code.isascii() or not code.isalpha():
        return ""
    return "".join(
        chr(_REGIONAL_INDICATOR_BASE + ord(ch) - _ASCII_A) for ch in code
    )


def country_name(country_code: str) -> str:
    """Return the human-readable country name, or ``""`` if unknown."""
    return COUNTRY_NAMES.get((country_code or "").upper(), "")


def tld_to_country_code(tld_name: str) -> str:
    """Best-effort mapping from a TLD label to an ISO-3166 alpha-2 code.

    Handles the common ``XX`` / ``co.xx`` / ``XX.org`` patterns. Returns an
    empty string when no two-letter country label can be inferred.
    """
    label = (tld_name or "").lower().strip().lstrip(".")
    if not label:
        return ""
    # Take the last "."-segment ("co.uk" -> "uk", "ae.org" -> "org").
    last = label.split(".")[-1]
    candidate = last.upper()
    if candidate in COUNTRY_NAMES:
        return candidate
    # Fall back to the first segment for things like "uk.com".
    first = label.split(".")[0].upper()
    if first in COUNTRY_NAMES:
        return first
    return ""
