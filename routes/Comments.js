const express = require('express');
 
const commentRoute = express.Router();

commentRoute.get('/:id', (req, res) => {
    try{
        const id = req.params.id;
        res.status(200).send(`details of comment with ${id} id`);
    } catch (e) {
        res.status(500).send({ error: 'internal server error' });
    }
});

commentRoute.post('/:id', (req, res) => {
    try{
        const id = req.params.id;
        res.status(200).send(`new comment created with ${id} id`);
    } catch (e) {
        res.status(500).send({ error: 'internal server error' });
    }
});

commentRoute.delete('/:id', (req, res) => {
    try{
        const id = req.params.id;
        res.status(200).send(`comment deleted with ${id} id`);
    } catch (e) {
        res.status(500).send({ error: 'internal server error' });
    }
});

module.exports = commentRoute;