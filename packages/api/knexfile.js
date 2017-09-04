module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './dev.sqlite3',
        },
        seeds: {
            tableName: './seeds',
        },
        migrations: {
            tableName: 'knex_migrations',
        },
        useNullAsDefault: true,
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
};
