const joi = require('joi');
const tokenController = require('../controllers/token');

module.exports = [
    {
        path: '/api/tokens',
        method: 'POST',
        handler: tokenController.create,
        config: {
            validate: {
                payload: {
                    passphrase: joi
                        .string()
                        .required()
                        .min(8),
                    address: joi
                        .string()
                        .required()
                        .regex(/^[0-9]+L$/, 'numbers followed by L')
                        .max(25)
                        .min(9),
                },
            },
        },
    },
];
