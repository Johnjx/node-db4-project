const router = require('express').Router();
const recipeModel = require('./recipes-model')

router.get('/', (req, res, next) => {
    res.send('hello from recipes')
})

router.get('/:recipe_id', (req, res, next) => {
    recipeModel.getRecipeById(req.params.recipe_id)
    .then(result => res.json(result))
    .catch(next)
})

module.exports = router;