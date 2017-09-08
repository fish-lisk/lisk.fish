// Set up environment variables
require('dotenv').config({ path: '../../.env' });

const Hapi = require('hapi');
const good = require('good');
const path = require('path');

const server = new Hapi.Server();
const connection = server.connection({
    host: '0.0.0.0',
    port: process.env.PORT,
});

const goodOptions = {
    ops: {
        interval: 1000,
    },
    reporters: {
        errorReporter: [
            {
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{ error: '*' }],
            },
            {
                module: 'good-squeeze',
                name: 'SafeJson',
            },
            {
                module: 'good-file',
                args: [path.join(__dirname, 'error.log')],
            },
        ],
    },
};

server.register(
    {
        register: good,
        options: goodOptions,
    },
    (pluginErr) => {
        if (pluginErr) throw pluginErr;

        server.start((serverErr) => {
            if (serverErr) throw serverErr;
            console.info(`Server started at: ${server.info.uri}`);
        });
    },
);

module.exports = {
    server,
    connection,
};
