const errorInProduction = process.env.NODE_ENV === 'production' ? 'error' : 'off'

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  plugins: [
    'import',
    'vue'
  ],
  extends: [
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
    'plugin:vue/recommended',
    'plugin:vue/essential',
    '@vue/standard',
    'airbnb-base',
  ],
  rules: {
    'no-console': errorInProduction,
    'no-debugger': errorInProduction,
    'import/dynamic-import-chunkname': 'error'
    // semi: ['error', 'always'],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
