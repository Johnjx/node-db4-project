const db = require('../../data/db-config');

async function getRecipeById(recipe_id){
    const result = await db('step_ingredients as si')
        .join('steps as st', 'si.step_id', 'st.step_id')
        .join('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
        .join('recipes as rc', 'rc.recipe_id', 'st.recipe_id')
        .select('si.ingredient_id', 'quantity', 'st.*', 'ingredient_name', 'ingredient_unit', 'recipe_name')
        .where('st.recipe_id', recipe_id)

    return result;    
}

/**
  
    SELECT si.ingredient_id,
    quantity,d
    st.*,
    ingredient_name,
    ingredient_unit,
    recipe_name

    FROM step_ingredients as si

    JOIN steps as st
    ON si.step_id = st.step_id

    JOIN ingredients as i
    ON si.ingredient_id = i.ingredient_id

    JOIN recipes as rc
    ON rc.recipe_id = st.recipe_id
    WHERE st.recipe_id = 1

 */

module.exports = {
    getRecipeById
}