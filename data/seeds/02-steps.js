exports.seed = function (knex, Promise) {
  return knex("steps").insert([
    { step_number: 1,
      step_instructions: "step for bolon",
      recipe_id: 1
    },
    { step_number: 2,
      step_instructions: "second step for bolon",
      recipe_id: 1 
    },
    { step_number: 1,
      step_instructions: "step for jamb",
      recipe_id: 2 
    },
    { step_number: 2,
      step_instructions: "second step for jamb",
      recipe_id: 2 
    },
  ]);
};
