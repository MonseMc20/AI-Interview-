exports.up = function (knex) {
  return knex.schema.createTable("interviews", function (table) {
    table.increments("id").primary();

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");

    table.string("job_position", 150).notNullable();

    table.string("career", 150).notNullable();

    table
      .string("difficulty", 20)
      .notNullable()
      .checkIn(["easy", "medium", "hard"]);

    table
      .string("interview_type", 20)
      .notNullable()
      .checkIn(["behavioral", "technical", "mixed"]);

    table.text("job_description");

    table
      .string("status", 20)
      .notNullable()
      .defaultTo("in_progress")
      .checkIn(["in_progress", "completed", "abandoned"]);

    table.decimal("overall_score", 5, 2);

    table.timestamp("started_at").defaultTo(knex.fn.now());

    table.timestamp("completed_at");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("interviews");
};