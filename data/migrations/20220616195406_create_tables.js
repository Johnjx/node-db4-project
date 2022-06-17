exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tb => {
        tb.increments('recipe_id')
        tb.varchar('recipe_name', 64).unique().notNullable()
    })
    .createTable('steps', tb => {
        tb.increments('step_id')
        tb.integer('step_number').unsigned().notNullable()
        tb.varchar('step_instructions', 128).notNullable()
        tb.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
    })
    .createTable('ingredients', tb => {
        tb.increments('ingredient_id')
        tb.varchar('ingredient_name', 64).unique().notNullable()
        tb.varchar('ingredient_unit', 32).notNullable()
    })
    .createTable('step_ingredients', tb => {
        tb.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
        tb.integer('ingredient_id')
            .unsigned()
            .references('ingredient_id')
            .inTable('ingredients')
        tb.float('quantity')
            .notNullable()    
        tb.primary(['step_id', 'ingredient_id'])
    })
};


exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('step')
        .dropTableIfExists('recipes');
};
