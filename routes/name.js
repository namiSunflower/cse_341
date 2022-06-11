const routes = require('express').Router();
const controller = require('../controllers/functions');

routes.get('/', (req, res) =>{
    res.send('Karen Mhyrr Alido');
});


module.exports = routes;