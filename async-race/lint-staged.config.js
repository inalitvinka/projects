/** @type {import('./lib/types').Configuration} */
export default {
  './**/*.{js,jsx,mjs,cjs,ts,tsx,json,html,scss}': [
    'prettier --write --ignore-unknown',
  ],
  '**/*.{js,mjs,cjs,ts}': ['eslint --color'],
  '**/*.scss': ['stylelint --fix'],
};
