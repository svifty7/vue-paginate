/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
    '@vue/typescript'
  ],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    $: 'readonly'
  },

  plugins: ['@typescript-eslint'],

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    }
  },

  ignorePatterns: ['./public_html/*', './dist/*'],

  rules: {
    'no-console': process.env.NODE_ENV === 'production'
      ? [
        'error',
        {
          allow: ['warn', 'error']
        }
      ]
      : [
        'warn',
        {
          allow: ['warn', 'error']
        }
      ],
    'no-debugger': 'error',
    'no-alert': ['error'],
    'max-len': [1, 120],
    'consistent-return': [1],
    'arrow-parens': [2, 'as-needed'],
    'quote-props': ['error', 'consistent-as-needed'],
    'import/extensions': [0],
    'import/no-extraneous-dependencies': [0],
    'import/no-unresolved': [0],
    'import/no-webpack-loader-syntax': [0],
    'import/prefer-default-export': [0],
    'indent': [
      2,
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['TemplateLiteral']
      }
    ],
    'generator-star-spacing': [0],
    'no-continue': [0],
    'no-await-in-loop': [0],
    'no-nested-ternary': [1],
    'no-return-assign': [1],
    'no-mixed-operators': [0],
    'no-bitwise': [0],
    'no-plusplus': [0],
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement'
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state']
      }
    ],
    'dot-notation': ['error'],
    'require-await': ['error'],
    'spaced-comment': ['error', 'always'],
    'camelcase': ['error'],
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 3
      }
    ],
    'array-bracket-spacing': [
      'error',
      'never',
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false
      }
    ],
    'array-element-newline': [
      'error',
      {
        multiline: true,
        minItems: 3
      }
    ],
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        minProperties: 3,
        consistent: true
      }
    ],
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: false,
        objectsInObjects: false
      }
    ],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: false
      }
    ],
    'arrow-spacing': ['error'],
    'block-spacing': ['error'],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false
      }
    ],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'dot-location': ['error', 'property'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'multiline'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'line-comment-position': [
      'error',
      {
        position: 'above'
      }
    ],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: true,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true,
        allowClassStart: true,
        allowClassEnd: true
      }
    ],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false
      }
    ],
    'max-statements-per-line': ['error'],
    'multiline-ternary': ['error', 'always-multiline'],
    'new-parens': 'error',
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 2
      }
    ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error'],
    'no-tabs': ['error'],
    'no-trailing-spaces': ['error'],
    'no-whitespace-before-property': ['error'],
    'operator-linebreak': ['error', 'before'],
    'padded-blocks': [
      'error',
      'never',
      {
        allowSingleLineBlocks: false
      }
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: [
          'block-like',
          'break',
          'class',
          'const',
          'debugger',
          'directive',
          'export',
          'throw',
          'try',
          'function',
          'import'
        ],
        next: '*'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'block-like',
          'break',
          'class',
          'const',
          'continue',
          'debugger',
          'directive',
          'return',
          'throw',
          'try',
          'export',
          'function',
          'import'
        ]
      },
      {
        blankLine: 'always',
        prev: 'block',
        next: 'block'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'multiline-const',
          'multiline-expression',
          'multiline-let',
          'multiline-var'
        ]
      },
      {
        blankLine: 'never',
        prev: 'break',
        next: 'case'
      },
      {
        blankLine: 'never',
        prev: 'break',
        next: 'default'
      },
      {
        blankLine: 'any',
        prev: 'singleline-const',
        next: 'singleline-const'
      },
      {
        blankLine: 'any',
        prev: 'singleline-let',
        next: 'singleline-let'
      },
      {
        blankLine: 'any',
        prev: 'singleline-var',
        next: 'singleline-var'
      },
      {
        blankLine: 'never',
        prev: 'import',
        next: 'import'
      }
    ],
    'rest-spread-spacing': ['error', 'never'],
    'semi': ['error', 'always'],
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'semi-style': ['error', 'last'],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error'],
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false
      }
    ],
    'switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    'template-curly-spacing': ['error', 'always'],
    'wrap-regex': 'error',
    'no-extra-semi': 'error',

    // Vue rules
    'vue/max-len': 'off',
    'vue/match-component-file-name': [
      'error',
      {
        extensions: [
          'jsx',
          'js',
          'tsx',
          'ts',
          'vue'
        ],
        shouldMatchCase: true
      }
    ],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: true,
        ignores: []
      }
    ],
    'vue/component-api-style': [
      'error',
      [
        'script-setup',
        'composition',
        'options'
      ]
    ],
    'vue/block-lang': ['off'],
    'vuejs-accessibility/anchor-has-content': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'vuejs-accessibility/mouse-events-have-key-events': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'vuejs-accessibility/no-autofocus': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/require-default-prop': 'off',
    'vue/one-component-per-file': 'off',
    'vue/padding-line-between-tags': [
      'error',
      [
        {
          blankLine: 'always',
          prev: '*',
          next: '*'
        }
      ]
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always'
      }
    ]
  },

  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'indent': 'off',
        'vue/html-indent': ['error', 2],
        'vue/script-indent': [
          'error',
          2,
          {
            baseIndent: 1,
            switchCase: 1
          }
        ],
        'quotes': [
          0,
          'double',
          'single'
        ],
        'max-len': 'off',
        'vue/max-len': [1, 120],
        'vue/valid-v-slot': 'off',
        'vue/max-attributes-per-line': [
          'error',
          {
            singleline: 1,
            multiline: 1
          }
        ]
      }
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
      ],
      rules: {
        'no-shadow': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-explicit-any': [0],
        '@typescript-eslint/no-non-null-assertion': [0]
      }
    }
  ]
};
