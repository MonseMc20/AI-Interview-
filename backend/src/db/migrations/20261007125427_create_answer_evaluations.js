exports.up = function (knex) {
  return knex.schema.createTable("answer_evaluations", function (table) {
    table.increments("id").primary();

    table
      .integer("answer_id")
      .notNullable()
      .references("id")
      .inTable("interview_answers")
      .onDelete("CASCADE");

    table.jsonb("evaluation").notNullable();

    table.decimal("score", 5, 2).notNullable();

    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("answer_evaluations");
};