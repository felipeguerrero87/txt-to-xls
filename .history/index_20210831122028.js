const express = require('express');
const app = express();
const path = require('path');

app.get('/',(req,res)=>{
    res.send('hola mundo')
});


app.listen(3040,()=>console.log('servidor corriendo'));