module.exports = {
    "env": {
        "amd": true,
        "browser": true,
        "jasmine": true,
        "jquery": true,
        "prototypejs": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "airbnb/legacy"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "ignorePatterns": ["stories/*", ".storybook/*", "dev_tools/*", "*.min.js"],
    "rules": {
        "array-bracket-spacing": [2, "never", {"singleValue": true}],
        "brace-style": [2, "1tbs", {allowSingleLine: false}],
        "curly": [2, "all"],
        "comma-dangle": [2, "never"],
        "dot-notation": [2, {"allowPattern": "^[a-z]+(_[a-z]+)+$"}],
        "eqeqeq": [2, "smart"],
        "indent": [2, 4, {SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1}],
        "lines-around-comment": [2, {
            "beforeLineComment": true,
            "beforeBlockComment": true,
            "allowBlockStart": true,
            "allowBlockEnd": true,
            "allowObjectStart": true,
            "allowObjectEnd": true,
            "allowArrayStart": true
        }
        ],
        "func-names": 0,
        "max-depth": [2, 4],
        "max-len": [2, 120, 4],
        "max-nested-callbacks": [2, 3],
        "newline-after-var": 2,
        "no-catch-shadow": 2,
        "no-cond-assign": 2,
        "no-constant-condition": 2,
        "no-control-regex": 1,
        "no-delete-var": 1,
        "no-dupe-else-if": 2,
        "no-empty": [2, {"allowEmptyCatch": true}],
        "no-extra-parens": 2,
        "no-eq-null": 1,
        "no-param-reassign": [2, {props: false}],
        "no-plusplus": 0,
        "no-undefined": 1,
        "no-unused-vars": [2, {
            "args": "after-used",
            "vars": "all",
            "varsIgnorePattern": "config"
        }],
        "no-underscore-dangle": 0,
        "padding-line-between-statements": [2,
            {"blankLine": "always", "prev": "*", "next": "return"},
            {"blankLine": "always", "prev": "multiline-var", "next": "*"},
            {"blankLine": "always", "prev": "switch", "next": "*"},
            {"blankLine": "always", "prev": "block-like", "next": "*"},
            {"blankLine": "always", "prev": "*", "next": "block-like"}
        ],
        "space-unary-ops": [2, {
            "words": false,
            "nonwords": false
        }
        ],
        "one-var": [2, "always"],
        "radix": 0,
        "semi-spacing": 2,
        "strict": ["error", "function"],
        "quote-props": 0,
        "use-isnan": 2,
        "valid-jsdoc": ["error", {"requireParamDescription": false, "requireReturnDescription": false}]
    }
};
