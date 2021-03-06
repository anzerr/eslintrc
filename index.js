let OFF = 0, WARN = 1, ERROR = 2;

module.exports = exports = {
	env: {
		es2020: true,
		node: true,
		amd: true,
		mocha: true
	},

	extends: 'eslint:recommended',

	parserOptions: {
	   ecmaVersion: 11
	},

	globals: {
		module: true,
		console: true,
		process: true,
		SharedArrayBuffer: true,
		require: true
	},

	rules: {
		// Possible Errors (overrides from recommended set)
		'no-extra-parens': OFF,
		'no-unexpected-multiline': ERROR,
		// All JSDoc comments must be valid
		'valid-jsdoc': [ERROR, {
			requireReturn: false,
			requireReturnDescription: false,
			requireParamDescription: true,
			prefer: {
				return: 'returns'
			}
		}],

		// Best Practices

		// Allowed a getter without setter, but all setters require getters
		'accessor-pairs': [ERROR, {
			getWithoutSet: false,
			setWithoutGet: true
		}],
		'block-scoped-var': WARN,
		'consistent-return': OFF,
		'curly': ERROR,
		'default-case': WARN,
		// the dot goes with the property when doing multiline
		'dot-location': [WARN, 'property'],
		'dot-notation': WARN,
		'eqeqeq': [ERROR, 'smart'],
		'guard-for-in': OFF,
		'no-alert': ERROR,
		'no-caller': ERROR,
		'no-case-declarations': WARN,
		'no-div-regex': WARN,
		'no-else-return': WARN,
		'no-empty': WARN,
		'no-empty-pattern': WARN,
		'no-eq-null': WARN,
		'no-eval': ERROR,
		'no-extend-native': ERROR,
		'no-extra-bind': WARN,
		'no-floating-decimal': WARN,
		'no-implicit-coercion': [WARN, {
			boolean: true,
			number: true,
			string: true
		}],
		'no-implied-eval': ERROR,
		'no-invalid-this': OFF,
		'no-iterator': ERROR,
		'no-labels': WARN,
		'no-lone-blocks': WARN,
		'no-loop-func': OFF,
		'no-magic-numbers': OFF,
		'no-multi-spaces': ERROR,
		'no-multi-str': WARN,
		'no-native-reassign': ERROR,
		'no-new-func': ERROR,
		'no-new-wrappers': ERROR,
		'no-new': OFF,
		'no-octal-escape': ERROR,
		'no-param-reassign': OFF,
		'no-process-env': OFF,
		'no-proto': ERROR,
		'no-redeclare': ERROR,
		'no-return-assign': OFF,
		'no-script-url': ERROR,
		'no-self-compare': ERROR,
		'no-throw-literal': ERROR,
		'no-unused-expressions': ERROR,
		'no-useless-call': ERROR,
		'no-useless-concat': ERROR,
		'no-useless-escape': OFF,
		'no-void': WARN,
		// Produce warnings when something is commented as TODO or FIXME
		'no-warning-comments': [WARN, {
			terms: ['TODO', 'FIXME'],
			location: 'start'
		}],
		'no-with': WARN,
		'radix': WARN,
		'vars-on-top': ERROR,
		// Enforces the style of wrapped functions
		'wrap-iife': [ERROR, 'outside'],
		'yoda': ERROR,

		// Variables
		'init-declarations': [ERROR, 'always'],
		'no-catch-shadow': WARN,
		'no-delete-var': ERROR,
		'no-label-var': ERROR,
		'no-shadow-restricted-names': ERROR,
		'no-shadow': WARN,
		// We require all vars to be initialized (see init-declarations)
		// If we NEED a var to be initialized to undefined, it needs to be explicit
		'no-undef-init': OFF,
		'no-undef': ERROR,
		'no-undefined': OFF,
		'no-unused-vars': WARN,
		// Disallow hoisting - let & const don't allow hoisting anyhow
		'no-use-before-define': ERROR,

		// Node.js and CommonJS
		'callback-return': [OFF, ['callback', 'next']],
		'global-require': OFF,
		'handle-callback-err': WARN,
		'no-mixed-requires': WARN,
		'no-new-require': ERROR,
		// Use path.concat instead
		'no-path-concat': ERROR,
		'no-process-exit': OFF,
		'no-restricted-modules': OFF,
		'no-sync': WARN,

		'no-console': OFF,

		// ECMAScript 6 support
		'no-constant-condition': OFF,
		'arrow-body-style': [OFF, 'always'],
		'arrow-parens': [ERROR, 'always'],
		'arrow-spacing': [ERROR, {before: true, after: true}],
		'constructor-super': ERROR,
		'generator-star-spacing': [ERROR, 'before'],
		'no-arrow-condition': OFF,
		'no-class-assign': ERROR,
		'no-const-assign': ERROR,
		'no-dupe-class-members': ERROR,
		'no-this-before-super': ERROR,
		'no-var': WARN,
		'object-shorthand': [WARN, 'never'],
		'prefer-arrow-callback': WARN,
		'prefer-spread': WARN,
		'prefer-template': OFF,
		'require-yield': ERROR,

		// Stylistic - everything here is a warning because of style.
		'array-bracket-spacing': [WARN, 'never'],
		'block-spacing': [WARN, 'never'],
		'brace-style': [WARN, '1tbs', {allowSingleLine: false}],
		'camelcase': WARN,
		'comma-spacing': [WARN, {before: false, after: true}],
		'comma-style': [WARN, 'last'],
		'computed-property-spacing': [WARN, 'never'],
		'consistent-this': [WARN, 'self'],
		'eol-last': WARN,
		'func-names': OFF,
		'func-style': [WARN, 'expression', {allowArrowFunctions: true}],
		'id-length': [WARN, {min: 1, max: 32}],
		'indent': [WARN, 'tab'],
		'jsx-quotes': [WARN, 'prefer-double'],
		'linebreak-style': [WARN, 'unix'],
		'lines-around-comment': [WARN, {beforeBlockComment: true}],
		'max-depth': [WARN, 8],
		'max-len': [WARN, 255],
		'max-nested-callbacks': [WARN, 8],
		'max-params': [WARN, 8],
		'new-cap': WARN,
		'new-parens': WARN,
		'no-array-constructor': WARN,
		'no-bitwise': OFF,
		'no-continue': OFF,
		'no-inline-comments': OFF,
		'no-lonely-if': OFF,
		'no-mixed-spaces-and-tabs': WARN,
		'no-multiple-empty-lines': WARN,
		'no-negated-condition': OFF,
		'no-nested-ternary': WARN,
		'no-new-object': WARN,
		'no-plusplus': OFF,
		'no-spaced-func': WARN,
		'no-ternary': OFF,
		'no-trailing-spaces': WARN,
		'no-underscore-dangle': OFF,
		'no-unneeded-ternary': WARN,
		'object-curly-spacing': [WARN, 'never'],
		'one-var': OFF,
		'operator-assignment': [OFF, 'never'],
		'operator-linebreak': [WARN, 'after'],
		'padded-blocks': [WARN, {blocks: 'never', classes: 'always', switches: 'never'}],
		'quote-props': [WARN, 'consistent-as-needed'],
		'quotes': [WARN, 'single'],
		'require-jsdoc': [OFF, {
			require: {
				FunctionDeclaration: true,
				MethodDefinition: true,
				ClassDeclaration: false
			}
		}],
		'keyword-spacing': OFF, // [ ERROR, {"before": false} ],
		'semi-spacing': [WARN, {before: false, after: true}],
		'semi': [ERROR, 'always'],
		'sort-vars': OFF,

		'space-in-parens': [WARN, 'never'],
		'space-infix-ops': [WARN, {int32Hint: true}],
		'space-return-throw-case': OFF,
		'space-unary-ops': ERROR,
		'spaced-comment': [WARN, 'always'],
		'wrap-regex': WARN
	}
};
