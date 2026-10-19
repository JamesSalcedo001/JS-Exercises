Offline editor assets (unmodified npm distributions):
- monaco-editor 0.52.2: min/vs and LICENSE.
- prettier 3.6.2: standalone.mjs, plugins/{babel,estree,html,postcss}.mjs and LICENSE.
- @wasm-fmt/ruff_fmt 0.15.20: ruff_fmt_web.js, ruff_fmt_bg.js,
  ruff_fmt_bg.wasm and LICENSE.

Downloaded with npm pack using the registry's integrity checks and normal TLS
verification. vendor/editor-assets.js enumerates every copied runtime file for
service-worker precaching. Regenerate that list when replacing these pinned assets.
