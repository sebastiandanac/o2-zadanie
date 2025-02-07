module.exports = {
  printWidth: 140,
  tabWidth: 4,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
    'prettier-plugin-sort-json',
  ],
  tailwindFunctions: ['clsx'],
  jsonRecursiveSort: true,
}
