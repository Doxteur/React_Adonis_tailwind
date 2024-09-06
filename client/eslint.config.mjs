import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default [
  {
    ignores: ["node_modules", "dist", "build", "public", "preline","tailwind.config.js"],
  },
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  },
];
