"""Mirror the OpusDNS MCP server docs into ``scalar/content/mcp-server``.

The Markdown is rendered in OpusDNS/opusdns-mcp by ``make docs`` and committed
there, so this package only copies it in and registers it in
``scalar/scalar.config.json``.
"""

__all__ = ["scalar_config"]
