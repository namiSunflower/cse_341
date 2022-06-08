const routes = require('express').Router();

routes.get('/', (req, res) =>{
    res.send('Karen Mhyrr Alido');
});

module.exports = routes;