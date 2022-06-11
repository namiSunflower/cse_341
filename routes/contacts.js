const routes = require('express').Router();
const controller = require('../controllers/functions');

routes.get('/', controller.displayAll)

routes.get('/:id', controller.displayOne);

// routes.get('/', (req, res) => {
//     res.send("Hi");
// })

module.exports = routes;