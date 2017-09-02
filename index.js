const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
});
server.start((err) => {
    if (err) throw err;
    console.log(`Server started at: ${server.info.uri}`);
});
