const path = require('path');
const inert = require('inert');

const { server } = require('@lisk.fish/server');

server.register(inert, () => {});

// Treat the /dist folder as a directory
server.route({
    method: 'GET',
    path: '/dist/{param*}',
    handler: {
        directory: {
            path: path.join(__dirname, 'dist'),
            listing: true,
        },
    },
});

// Serve index.html to all other routes
server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
        file: {
            path: path.join(__dirname, 'index.html'),
        },
    },
});
