const express = require('express');
const app = express();
const PORT = 3001;

const userRoute = require('./routes/User.js');
const commentRoute = require('./routes/Comments.js');

// middleware
app.use( express.json() );

// middleware
const checkIfHacker = (req, res, next) => {
    try{    
        const name = req.body.name;
        if(name !== 'hacker') {
            next();
        } else {
            res.status(200).send({ error: 'hackers are not allowed' });
        }
    } catch (e) {
        res.status(500).send({ error: 'internal server error' });
    }
};

app.use('/user', checkIfHacker, userRoute);
app.use('/comment', checkIfHacker, commentRoute);

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
});