
exports.up = function(knex) {
  return knex.schema.createTable('cars', function(table){
      table.increments();
      table.string('vin', 128).notNullable();
      table.string('make', 128).notNullable();
      table.string('model', 128).notNullable();
      table.integer('mileage').notNullable();
      table.string('transmission_type', 128);
      table.string('title', 128);

      table.timestamps(true, true)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
