const routes = require('express').Router();
const controller = require('../controllers/functions');

//Read
routes.get('/', controller.displayAll)

routes.get('/:id', controller.displayOne);

//Create
routes.post('/', controller.createOne)

//Update
routes.put('/:id', controller.updateOne)

//Delete
routes.delete('/:id', controller.deleteOne)




// routes.get('/', (req, res) => {
//     res.send("Hi");
// })

module.exports = routes;