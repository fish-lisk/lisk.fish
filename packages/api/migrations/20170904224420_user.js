exports.up = knex =>
    knex.schema.createTable('user', (userTable) => {
        userTable.increments();
        userTable.timestamps();
        userTable
            .string('address', 25)
            .notNullable()
            .unique();
        userTable.string('password', 128).notNullable();
        userTable.string('public_key', 64).notNullable();
    });

exports.down = knex => knex.schema.dropTableIfExists('user');
