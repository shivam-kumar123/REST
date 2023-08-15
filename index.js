const express = require('express');
const app = express();
const PORT = 3001;

const userRoute = require('./routes/User.js');
const commentRoute = require('./routes/Comments.js');

app.use('/user', userRoute);
app.use('/comment', commentRoute);

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
});