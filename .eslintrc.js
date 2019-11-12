const INLINE_ELEMENTS = require('eslint-plugin-vue/lib/utils/inline-non-void-elements.json')

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript'
    /*
    'prettier',
    'prettier/standard',
    'prettier/vue',
    */
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: false
    }
  },
  rules: {
    // For discussion
    'prefer-promise-reject-errors': 'off',
    // Only allow debugger in development
    'no-debugger': process.env.PRE_COMMIT || process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // Only allow `console.log` in development
    'no-console': process.env.PRE_COMMIT || process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
    'no-tabs': 'off',
    'no-var': 'error',
    // Prettier settings
    'max-len': ['error', 150], // printWidth
    indent: ['error', 'tab'], // useTabs
    semi: ['error', 'never'], // semi
    quotes: ['error', 'single'], // singleQuote
    'comma-dangle': 'off', // trailingComma
    'object-curly-spacing': ['error', 'always'], // bracketSpacing
    'arrow-parens': ['error', 'as-needed'], // arrowParens
    'handle-callback-err': 'off',
    'array-element-newline': ['error', 'consistent'],
    'space-before-function-paren': 'off',
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: ['component', 'template', 'transition', 'transition-group', 'keep-alive', 'slot']
      }
    ]
  },
  overrides: [
    {
      files: ['**/*.spec.ts'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
      },
      env: { jest: true },
      globals: {
        mount: false,
        shallowMount: false,
        shallowMountView: false,
        createComponentMocks: false,
        createModuleStore: false
      }
    },
    {
      // TODO: enable again when Prettier 1.17 launches
      files: ['*.vue'],
      plugins: [
        'sort-class-members'
      ],
      rules: {
        // https://github.com/mysticatea/vue-eslint-parser#%EF%B8%8F-known-limitations
        'max-len': 'off',
        // Other
        indent: 'off',
        'vue/script-indent': ['error', 'tab', { baseIndent: 1 }],
        'vue/html-indent': ['error', 'tab'],
        'vue/no-multi-spaces': 'error',
        'sort-class-members/sort-class-members': [
          'error',
          {
            order: [
              '[properties]',
              '[accessor-kinds]',
              '[lifecycle-methods]',
              { type: 'method' },
              {
                name: 'render',
                type: 'method'
              }
            ],
            groups: {
              'accessor-kinds': [{ type: 'method', kind: 'get' }, { type: 'method', kind: 'set' }, '[accessor-pairs]'],
              'lifecycle-methods': [
                { name: 'beforeCreate', type: 'method' },
                { name: 'created', type: 'method' },
                { name: 'beforeMount', type: 'method' },
                { name: 'mounted', type: 'method' },
                { name: 'beforeUpdate', type: 'method' },
                { name: 'updated', type: 'method' },
                { name: 'activated', type: 'method' },
                { name: 'deactivated', type: 'method' },
                { name: 'beforeDestroy', type: 'method' },
                { name: 'destroyed', type: 'method' }
              ]
            }
          }
        ]
      }
    }
  ]
}
