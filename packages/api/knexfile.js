const path = require('path');

module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: path.join(__dirname, 'dev.sqlite3'),
        },
        seeds: {
            directory: path.join(__dirname, 'seeds'),
        },
        migrations: {
            tableName: 'knex_migrations',
        },
        useNullAsDefault: true,
    },

    production: {
        client: 'pg',
        connection: `${process.env.DATABASE_URL}?sslmode=require`,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
};
