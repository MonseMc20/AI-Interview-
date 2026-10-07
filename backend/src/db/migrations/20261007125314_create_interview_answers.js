exports.up = function (knex) {
  return knex.schema.createTable("interview_answers", function (table) {
    table.increments("id").primary();

    table
      .integer("question_id")
      .notNullable()
      .references("id")
      .inTable("interview_questions")
      .onDelete("CASCADE");

    table.text("answer_text").notNullable();

    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("interview_answers");
};