const boom = require('boom');
const scrypt = require('scrypt');
const jwt = require('jsonwebtoken');
const knex = require('../knex');

async function create(request, reply) {
    const { passphrase } = request.payload;
    const address = request.payload.address.toUpperCase();
    try {
        const [user] = await knex('users')
            .where({ address })
            .select('id', 'passphrase_key', 'public_key');

        if (!user) {
            reply(boom.unauthorized('user not found'));
            return;
        }
        const { id, passphrase_key, public_key } = user;
        const isValidPassphrase = await scrypt.verifKdf(
            passphrase_key,
            passphrase,
        );
        if (!isValidPassphrase) {
            reply(boom.unauthorized('invalid passphrase'));
            return;
        }
        const token = jwt.sign(
            {
                address,
                public_key,
            },
            process.env.JWT_SECRET,
            {
                algorithm: 'HS256',
                issuer: process.env.JWT_ISSUER,
                subject: id,
                expiresIn: '1h',
            },
        );
        reply({ token });
    } catch (err) {
        reply(boom.badImplementation(err.message));
    }
}

module.exports = {
    create,
};
