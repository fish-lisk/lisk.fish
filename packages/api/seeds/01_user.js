exports.seed = (knex) => {
    const tableName = 'user';
    // Use the actual address passphrases so they are not lost, this is not a requirement of the API
    // and should NOT be done in real use
    const rows = [
        {
            address: '16313739661670634666L',
            public_key:
                'c094ebee7ec0c50ebee32918655e089f6e1a604b83bcaa760293c61e0f18ab6f',
            password:
                'wagon stock borrow episode laundry kitten salute link globe zero feed marble',
        },
    ];

    // Deletes ALL existing entries
    return knex(tableName)
        .del()
        .then(() => knex(tableName).insert(rows));
};
