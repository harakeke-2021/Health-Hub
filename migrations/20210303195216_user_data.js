

//the export up is for making changes to the database.

exports.up = function(knex) {
    return knex.schema.createTable('user_data', (table) => {
        table.increments('id')
        table.integer('')
        table.dateTime('startDate')
    })
};

// the export down is for undoing changes that have been made to the database.
exports.down = function(knex) {
  
};
