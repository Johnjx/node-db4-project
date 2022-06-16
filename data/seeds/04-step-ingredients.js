exports.seed = function (knex, Promise) {
  return knex("step_ingredients").insert([
    { step_id: 1,
      ingredient_id: 1,
      quantity: 2
    },
    { step_id: 2,
      ingredient_id: 3,
      quantity: 1
    },
    { step_id: 3,
      ingredient_id: 4,
      quantity: 3
    },
    { step_id: 4,
      ingredient_id: 2,
      quantity: 3 
    },
  ]);
};
