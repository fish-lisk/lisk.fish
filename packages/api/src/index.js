// Set up environment variables
require('dotenv').config({ path: '../../.env' });

const boom = require('boom');
const hapiAuthJwt = require('hapi-auth-jwt2');
const { server } = require('@lisk.fish/server');
const knex = require('./knex');

const routes = require('./routes');

server.register(hapiAuthJwt, (err) => {
    if (err) throw err;
    server.auth.strategy('jwt', 'jwt', {
        key: process.env.JWT_SECRET,
        verifyOptions: { algorithms: ['HS256'] },
        validateFunc: async (decoded, request, callback) => {
            const id = decoded.sub;
            try {
                // check if id exists
                const [user] = await knex('users')
                    .where({ id })
                    .select('id');
                callback(null, !!user);
            } catch (dbErr) {
                callback(boom.badImplementation(dbErr));
            }
        },
    });

    routes.forEach((route) => {
        // prepend api to all routes
        server.route(route);
    });
});
