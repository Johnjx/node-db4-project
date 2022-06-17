exports.seed = function (knex, Promise) {
  return knex("ingredients").insert([
    { ingredient_name: 'cream',
      ingredient_unit: "cup",
    },
    { ingredient_name: 'salt',
      ingredient_unit: "tsp", 
    },
    { ingredient_name: 'butter',
      ingredient_unit: "tbsp", 
    },
    { ingredient_name: 'hot peppers',
      ingredient_unit: "tbsp", 
    },
  ]);
};
