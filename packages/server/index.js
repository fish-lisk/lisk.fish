// Set up environment variables
require('dotenv').config({ path: '../../.env' });

const Hapi = require('hapi');

const server = new Hapi.Server();
const connection = server.connection({
    host: '0.0.0.0',
    port: process.env.PORT,
});
server.start((err) => {
    if (err) throw err;
    console.log(`Server started at: ${server.info.uri}`);
});

module.exports = {
    server,
    connection,
};
