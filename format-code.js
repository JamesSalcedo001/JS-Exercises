let pythonReady;
export async function formatCode(code, language) {
  if (language === 'python') {
    const ruff = await import('./vendor/ruff/ruff_fmt_web.js');
    await (pythonReady ||= ruff.default());
    return ruff.format(code, 'practice.py', {indent_style:'space',indent_width:4,line_width:88});
  }
  const [prettier, babel, estree, html, postcss] = await Promise.all([
    import('./vendor/prettier/standalone.mjs'), import('./vendor/prettier/plugins/babel.mjs'),
    import('./vendor/prettier/plugins/estree.mjs'), import('./vendor/prettier/plugins/html.mjs'),
    import('./vendor/prettier/plugins/postcss.mjs'),
  ]);
  return prettier.format(code, {parser:language === 'html' ? 'html' : 'babel',plugins:[babel,estree,html,postcss],tabWidth:2});
}
