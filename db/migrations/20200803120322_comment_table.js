exports.up = function (knex) {
  return knex.schema.createTable("comments", (commentsTable) => {
    commentsTable.increments("comment_id");
    commentsTable.string("author").references("users.username");
    commentsTable.integer("article_id").references("articles.article_id");
    commentsTable.integer("votes").defaultTo(0);
    commentsTable.string("body").notNullable();
    commentsTable.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("comments");
};
