const Blog = require('../models/Blogs');

const blog_index= (req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('index',{title:"All Blogs",blogs:result});
    })
    .catch((err)=>{
        res.send(err);
    })
}
const create_get = (req, res) => {
    res.render('create', { title: 'Create a new blog' })}



const blog_details=(req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=>{
        res.render('details',{title:"All Blogs",blog:result});
    })
    .catch((err)=>{
        res.render('../views/404', { title: '404' });
    })
  }
  const blog_delete = (req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect:'/blogs'});
    })
    .catch((err)=>{
        res.status(404).render('../views/404', { title: '404' });
    })
  }
  const blog_index_post =  (req, res) => {
    // console.log(req.body);
    const blog = new Blog(req.body);
  
    blog.save()
      .then(result => {
        res.redirect('/blogs');
      })
      .catch(err => {
        console.log(err);
      });
  }

    module.exports={
    blog_index,
    create_get,
    blog_details,
    blog_delete,
    blog_index_post
};