exports.up = function (knex) {
  console.log("Creating Comments Table");

  return knex.schema.createTable("comments", (commentsTable) => {
    commentsTable.increments("comment_id");
    commentsTable.string("author").references("users.username");
    commentsTable.integer("article_id").references("articles.article_id");
    commentsTable.integer("votes").defaultTo(0);
    commentsTable.string("body").notNullable();
  });
};

exports.down = function (knex) {
  console.log("Dropping Comments Table");

  return knex.schema.dropTable("comments");
};