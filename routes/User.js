const express = require('express');
 
const userRoute = express.Router();

userRoute.get('/:id', (req, res) => {
    try{
        const id = req.params.id;
        res.status(200).send(`details of user with ${id} id`);
    } catch (e) {
        res.status(500).send({ error: 'internal server error' });
    }
});

userRoute.post('/:id', (req, res) => {
    try{
        const id = req.params.id;
        res.status(200).send(`new user created with ${id} id`);
    } catch (e) {
        res.status(500).send({ error: 'internal server error' });
    }
});

userRoute.delete('/:id', (req, res) => {
    try{
        const id = req.params.id;
        res.status(200).send(`user with ${id} id is deleted`);
    } catch (e) {
        res.status(500).send({ error: 'internal server error' });
    }
});

module.exports = userRoute;