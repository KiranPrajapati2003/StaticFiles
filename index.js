const express = require('express')
const path = require('path')
const port = 3000;
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.set('view engine','ejs')
app.get('/',(req,res)=>{
 res.render('index')
})
app.listen(port,(err)=>{
    if(err){
        console.log('server not found');
        return false;
    }
    console.log('server is start http://localhost:'+port);
    
})