const inert = require('inert');

const { server, connection } = require('@lisk.fish/server');

server.register(inert, () => {});

// Treat the /dist folder as a directory
connection.route({
    method: 'GET',
    path: '/dist/{param*}',
    handler: {
        directory: {
            path: 'dist',
            listing: true,
        },
    },
});

// Serve index.html to all other routes
connection.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
        file: {
            path: 'index.html',
        },
    },
});
