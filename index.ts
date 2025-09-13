import type { ResolvableFlatConfig } from 'eslint-flat-config-utils'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import tailwind from 'eslint-plugin-tailwindcss'

const urlToPath = fileURLToPath(import.meta.url)
const dir = dirname(urlToPath)

/**
 * Generate ESLint flat configs for Nuxt with stylistic and Tailwind rules.
 *
 * @param cssConfigFile Path to the Tailwind CSS config file `default`=`/app/assets/styles/index.css`
 * @returns ESLint flat config objects.
 */
function config(cssConfigFile: string = '/app/assets/styles/index.css'): ResolvableFlatConfig[] {
  return [
    {
      rules: {
        '@stylistic/no-multiple-empty-lines': ['error', { max: 2, maxEOF: 2, maxBOF: 0 }],
        '@stylistic/padded-blocks': 'off',
        '@stylistic/no-trailing-spaces': ['error', { skipBlankLines: true }],
        '@stylistic/brace-style': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/block-tag-newline': ['error', { multiline: 'ignore', singleline: 'ignore' }],
        'vue/multiline-html-element-content-newline': ['error', { allowEmptyLines: true, ignores: ['pre', 'textarea'] }],
      },
    },
    {
      ...tailwind.configs['flat/recommended'],
      settings: {
        tailwindcss: {
          config: `${dir}${cssConfigFile}`,
        },
      },
    }
  ]
}

export default config