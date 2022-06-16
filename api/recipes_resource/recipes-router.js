const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.send('hello from recipes')
})

module.exports = router;