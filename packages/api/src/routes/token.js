const tokenController = require('../controllers/token');

module.exports = [
    {
        path: '/api/tokens',
        method: 'POST',
        handler: tokenController.create,
    },
];
