const express = require('express');
const app = express();
const path = require('path');

app.get('/',(req,res)=>{
    let url = path.join(__dirname,'public'+'/'+'index.html')
    res.send(__dirname,'public/index.html')
});

app.post('/files',(req,res)=>{

})


app.listen(3040,()=>console.log('servidor corriendo'));