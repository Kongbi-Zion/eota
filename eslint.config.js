import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import nuxtConfig from "@nuxt/eslint-config";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  nuxtConfig,
  prettierConfig,
  { rules: { "prettier/prettier": "error" } },
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
];

// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
// import pluginVue from "eslint-plugin-vue";

// export default [
//   {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
//   {languageOptions: { globals: {...globals.browser, ...globals.node} }},
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   ...pluginVue.configs["flat/essential"],
//   {files: ["**/*.vue"], languageOptions: {parserOptions: {parser: tseslint.parser}}},
// ];
