exports.up = function (knex) {
  return knex.schema.createTable("interview_questions", function (table) {
    table.increments("id").primary();

    table
      .integer("interview_id")
      .notNullable()
      .references("id")
      .inTable("interviews")
      .onDelete("CASCADE");

    table.integer("question_number").notNullable();

    table.text("question_text").notNullable();

    table
      .string("question_type", 20)
      .notNullable()
      .checkIn(["behavioral", "technical", "situational"]);

    table.boolean("is_follow_up").notNullable().defaultTo(false);

    table
      .integer("parent_question_id")
      .references("id")
      .inTable("interview_questions")
      .onDelete("CASCADE");

    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("interview_questions");
};