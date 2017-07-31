/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const Post = require('../models/post.model');

router.get('/posts', (req,res) => {
  Post.find({}, function (err, posts) {
    if(err) return res.status(500).json({err: err});
    return res.status(500).json({
      posts: posts
    });
  });
});

router.get('/posts/:postId', (req, res) => {
  Post.find({_id: req.params.postId}, function (err,posts) {
    if(err) return res.status(500).json({err: err});
    return res.status(200).json({
      posts: posts
    });
  });
});

router.post('/posts', (req, res) => {
  const post = new Post(req.body);
  post.save(function (err, post) {
    if(err) return res.status(500).json({err: err});
    return res.status(201).json({
      msg: 'Successfully created a new post'
    });
  });
});

router.put('/posts', (req, res) => {
  res.send('Updating that post');
});

router.delete('/posts/:postId', (req, res) => {
  res.send('deleting the post');
});

module.exports = router;
