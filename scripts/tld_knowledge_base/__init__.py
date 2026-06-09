"""Pure-Python generator for the OpusDNS TLD Knowledge Base.

Converts compiled TLD specification YAML (from the ``tld-specifications`` repo)
into Scalar-ready Markdown pages and registers those pages in
``scalar/scalar.config.json``.
"""

__all__ = ["render", "countries", "formatters", "scalar_config"]
