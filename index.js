/*jshint esversion: 6*/
const express = require('express');
const server = express();
const morgan = require('morgan');
const cors = require('cors');
const port = process.env.PORT || 8080;

server.use(morgan('dev'));
server.use(cors());

server.get('/', (req, res) => {
     res.send('it works');
});


server.listen(port, () => {
   console.log(`Now listening on port ${port}`);
});
