/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();

router.get('/posts', (req,res) => {
  res.send('getting all dem posts');
});

router.get('/posts/:postId', (req, res) => {
  res.send('getting dat one post you requested');
});

router.post('/posts', (req, res) => {
  res.send('creating a new post');
});

router.put('/posts', (req, res) => {
  res.send('Updating that post');
});

router.delete('/posts/:postId', (req, res) => {
  res.send('deleting the post');
});

module.exports = router;
