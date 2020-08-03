exports.up = function(knex) {
   console.log("Creating Topics Table");

   return knex.schema.createTable('topics', (topicsTable) => {
     topicsTable.string("slug").unique().primary();
     topicsTable.string('description', [100]);
   })
};

exports.down = function(knex) {
  console.log("Dropping Topics Table")

  return knex.schema.dropTable("topics");
};
