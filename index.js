/*jshint esversion: 6*/
const express = require('express');
const server = express();
const morgan = require('morgan');
const cors = require('cors');
const port = process.env.PORT || 8080;
const userRouter = require('./routers/user.router');

server.use(morgan('dev'));
server.use(cors());
server.use(userRouter);

server.get('/', (req, res) => {
     res.send('it works');
});


server.listen(port, () => {
   console.log(`Now listening on port ${port}`);
});
