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
    },
};
