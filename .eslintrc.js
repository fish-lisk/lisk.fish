module.exports = {
    root: true,
    extends: 'airbnb',
    env: {
        node: true,
    },
    rules: {
        indent: ['error', 4, { SwitchCase: 1, VariableDeclarator: 1 }],
        'max-len': 'off',
        'no-console': 'off',
        // react
        'react/jsx-filename-extension': 'off',
        'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-no-bind': [
            'error',
            {
                ignoreRefs: true,
                allowArrowFunctions: true,
                allowBind: false,
            },
        ],
        'react/jsx-closing-bracket-location': [
            'error',
            {
                nonEmpty: 'after-props',
                selfClosing: 'tag-aligned',
            },
        ],
        'react/forbid-prop-types': 'off',
    },
};
