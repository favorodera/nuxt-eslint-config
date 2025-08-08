import type { ResolvableFlatConfig } from 'eslint-flat-config-utils'

const config: ResolvableFlatConfig = {
  rules: {
    '@stylistic/no-multiple-empty-lines': ['error', { max: 3, maxEOF: 3, maxBOF: 0 }],
    '@stylistic/padded-blocks': 'off',
    '@stylistic/no-trailing-spaces': ['error', { skipBlankLines: true }],
    '@stylistic/brace-style': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/block-tag-newline': ['error', { multiline: 'ignore', singleline: 'ignore' }],
  },
} 

export default config