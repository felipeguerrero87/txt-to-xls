const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    
});

app.post('/files',(req,res)=>{

})


app.listen(3040,()=>console.log('servidor corriendo'));