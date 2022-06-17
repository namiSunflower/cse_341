const routes = require('express').Router();
// const contacts = require('./contacts')

// routes.get('/contacts', (req, res) =>{
//     res.send('Karen Mhyrr Alido');
// });

routes.use('/', require('./name'))

routes.use('contacts', require('./contacts'));


module.exports = routes;