const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const query = "mongodb+srv://thehsin:test1234@clusterlearn.1tgegnc.mongodb.net/NodeLearn?retryWrites=true&w=majority&appName=ClusterLearn"
const route = require("./routes/blogRoutes")
mongoose.connect(query,{useNewUrlParser:true,useUnifiedTopology:true}

).then((result)=>{
    app.listen(3000);
}).catch(()=>{
console.log("error connecting to db");
});

app.set('view engine','ejs');
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.get('/', (req, res) => {
  
   res.redirect('/blogs');
  });
  
  app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
  });
  app.use('/blogs',route);
  // 404 page
  app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });