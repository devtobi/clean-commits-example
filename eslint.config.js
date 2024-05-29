import eslintConfigPrettier from "eslint-config-prettier";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    ignores: ["node_modules", ".husky"],
  },
];
