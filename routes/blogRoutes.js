const express = require('express');
const Blog = require('../models/Blogs');
const router = express.Router();
const blogcontroller = require("../controllers/blogcontroller")

router.get('/',blogcontroller.blog_index);
  router.get('/create', blogcontroller.create_get);
  router.get('/:id',blogcontroller.blog_details);
  router.delete('/:id',blogcontroller.blog_delete);
  router.post('/', blogcontroller.blog_index_post);
  
 
  router.get('/add-blog', (req, res) => {
   const blog = new Blog({
    title:"new blog2",
    snippet :"about my new blog2",
    body:"more about my new blog2"
   });
   blog.save()
   .then((result)=>{
    res.send(result);
   })
   .catch((error)=>{
    res.send(error);
   })
  });
  router.get('/all-blogs',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        res.send(err);
    })
  })
  router.get('/single-blog',(req,res)=>{
    Blog.findById("664cd9c7c559e3fbd9c27c39")
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        res.send(err);
    })
  })
  

  module.exports = router;