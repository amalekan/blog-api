/*jshint esversion: 6*/
const express = require('express');
const mongoose = require('mongoose');
const server = express();
const {mongoURI} = require('./credentials');
const morgan = require('morgan');
const cors = require('cors');
const port = process.env.PORT || 8080;

mongoose.connect(mongoURI, {
  useMongoClient: true
});
const userRouter = require('./routers/user.router');
const postRouter = require('./routers/post.router');

server.use(morgan('dev'));
server.use(cors());
server.use(userRouter);
server.use(postRouter);

server.get('/', (req, res) => {
     res.send('it works');
});


server.listen(port, () => {
   console.log(`Now listening on port ${port}`);
});
