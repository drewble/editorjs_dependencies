const fs = require('fs');
const path = require('path');
const base_dir = './';
const projects = {
  // Dependencies for main module "editorjs".
  "editorjs/core.min.js": require.resolve('@editorjs/editorjs'),
  "editorjs/tools/header.min.js": require.resolve('@editorjs/header'),
  "editorjs/tools/list.min.js": require.resolve('@editorjs/list'),
  "editorjs/tools/checklist.min.js": require.resolve('@editorjs/checklist'),
  "editorjs/tools/code.min.js": require.resolve('@editorjs/code'),
  "editorjs/tools/delimiter.min.js": require.resolve('@editorjs/delimiter'),
  "editorjs/tools/inline-code.min.js": require.resolve('@editorjs/inline-code'),
  "editorjs/tools/link.min.js": require.resolve('@editorjs/link'),
  "editorjs/tools/table.min.js": require.resolve('@editorjs/table'),
  "editorjs/tools/dimage.min.js": require.resolve('@batkor/editorjs-dimage'),
  // Dependencies for "editorjs_media" module.
  "editorjs/tools/media-image.min.js": require.resolve('@batkor/editorjs-media-image'),
  // Dependencies for "editorjs_prism" module.
  "editorjs/tools/code-lang.min.js": require.resolve('@batkor/code-lang'),
  "prism/prism.js": require.resolve('prismjs'),
  "prism/components/prism-markup.min.js": require.resolve('prismjs/components/prism-markup.min.js'),
  "prism/components/prism-markup-templating.min.js": require.resolve('prismjs/components/prism-markup-templating.min.js'),
  "prism/components/prism-php.min.js": require.resolve('prismjs/components/prism-php.min.js'),
  "prism/components/prism-php-extras.min.js": require.resolve('prismjs/components/prism-php-extras.min.js'),
  "prism/components/prism-css.min.js": require.resolve('prismjs/components/prism-css.min.js'),
  "prism/components/prism-css-extras.min.js": require.resolve('prismjs/components/prism-css-extras.min.js'),
  "prism/components/prism-clike.min.js": require.resolve('prismjs/components/prism-clike.min.js'),
  "prism/components/prism-javascript.min.js": require.resolve('prismjs/components/prism-javascript.min.js'),
  "prism/components/prism-twig.min.js": require.resolve('prismjs/components/prism-twig.min.js'),
  "prism/components/prism-json.min.js": require.resolve('prismjs/components/prism-json.min.js'),
  "prism/components/prism-yaml.min.js": require.resolve('prismjs/components/prism-yaml.min.js'),
  "prism/components/prism-bash.min.js": require.resolve('prismjs/components/prism-bash.min.js'),
  "prism/plugins/prism-normalize-whitespace.min.js": require.resolve('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js'),
  "prism/themes/prism-okaidia.css": require.resolve('prismjs/themes/prism-okaidia.css'),
}

Object.keys(projects).forEach(filename => {

  const source = projects[filename];
  const output = base_dir + filename;
  const destination = path.dirname(output);
  if (!fs.existsSync(destination)){
    fs.mkdirSync(destination, { recursive: true });
  }

  fs.copyFile(source, output, (err) => {
    if (err) throw err;
    console.log(`Create: "${output}" file`);
  });
})
