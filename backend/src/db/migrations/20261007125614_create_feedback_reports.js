exports.up = function (knex) {
  return knex.schema.createTable("feedback_reports", function (table) {
    table.increments("id").primary();

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");

    table
      .integer("interview_id")
      .notNullable()
      .references("id")
      .inTable("interviews")
      .onDelete("CASCADE");

    table.decimal("overall_score", 5, 2).notNullable();

    table.decimal("behavioral_score", 5, 2);

    table.decimal("technical_score", 5, 2);

    table.decimal("situational_score", 5, 2);

    table.jsonb("strengths");

    table.jsonb("areas_for_improvement");

    table.jsonb("recommendations");

    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("feedback_reports");
};