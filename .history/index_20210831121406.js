const express = require('express');
const app = express();

app.get('/',(res,req)=>{
    res.send('hola mundo');
});


app.listen(8080,()=>console.log('servidor corriendo'));