const routes = require('express').Router();
// const contacts = require('./contacts')
// routes.get('/', (req, res) =>{
//     res.send('Karen Mhyrr Alido');
// });

// routes.get('/contacts', (req, res) =>{
//     res.send('Karen Mhyrr Alido');
// });


routes.use('/contacts', require('./contacts'));


module.exports = routes;