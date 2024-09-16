/**
 * @type {import('prettier').Config}
 */
module.exports = {
  printWidth: 120,
  singleQuote: true,
  tabWidth: 2,
  semi: false,
  trailingComma: 'none',
  overrides: [
    {
      files: ['*.yml', '*.yaml'],
      options: {
        singleQuote: false
      }
    },
    {
      files: ['*.css', '*.scss'],
      options: {
        singleQuote: false
      }
    }
  ]
}
