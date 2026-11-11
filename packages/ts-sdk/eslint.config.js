import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  {
    ignores: [
      "coverage/**",
      "dist/**",
      "src/generated/**",
      "src/resources/generated/**",
      "scripts/**",
      "tsup.config.ts",
      "vitest.config.ts"
    ]
  },
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ["src/**/*.ts", "tests/**/*.ts"],
    languageOptions: {
      parserOptions: {
        projectService: true
      }
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/consistent-type-imports": ["error", { "prefer": "type-imports" }],
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/ban-ts-comment": ["error", { "ts-ignore": "allow-with-description" }]
    }
  },
  // Turns off stylistic ESLint rules that Prettier owns. Keep this last.
  prettier
);
