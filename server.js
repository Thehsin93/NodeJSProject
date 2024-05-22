const http = require('http');
const fs = require('fs');
const _ = require('lodash');
const server = http.createServer((req,res)=>{
    const random = _.random(0,20);
    console.log(random);
    const greet = _.once(()=>{
        console.log("hello world");
    })
    greet();
    greet();
    console.log("req received");
    res.setHeader('Content-Type','text/html');
    let path ="./Views/";
    switch(req.url){
        case '/':
            path+='index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path+='about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.setHeader('Location','/about');
            res.statusCode = 301;
            res.end();
            break;

        default:
            path+='404.html';
            res.statusCode = 404;
            break;
    }
  
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    })

})
server.listen(3000,'localhost',()=>{
    console.log('started listening');
})
