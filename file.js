const fs = require('fs');
fs.readFile('./docs/blog1.txt',(err,data)=>{
    if(err)
        console.log(err);
    console.log(data.toString());
})
fs.writeFile('./docs/blog1.txt','hai welcome to Thehsins blog',()=>{
   
    console.log('file written');
})

fs.writeFile('./docs/blog2.txt','hai welcome to Thehsins blog again',()=>{
   
    console.log('file written');
})
if(!fs.existsSync('./Assets'))
fs.mkdir('./Assets',(err)=>{
    if(err)
    console.log(err);
})
else{
    fs.rmdir('./Assets',(err)=>{
        if(err)
            console.log(err);
    })
}
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err)
            console.log("error");
    })
}