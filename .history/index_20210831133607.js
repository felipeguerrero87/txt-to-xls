const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer')
const mineType = require('mime-types')

if (typeof require !== 'undefined') XLSX = require('xlsx');

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
        cb('', 'archivo.' + mineType.extension(file.mimetype))
    }
})

const upload = multer({
    storage: storage
})

app.use(express.static(path.join(__dirname, 'public')));


app.post('/files', upload.single('avatar'), (req, res) => {
    res.send('todo bien');
})

app.get('/download', (req, res) => {
    const file = 'files/salida.xls';
    const txt = XLSX.readFile('uploads/archivo.txt');
    XLSX.writeFile(txt, "files/salida.xls")
    res.setHeader('Content-disposition', 'attachment;filename=salida.xls');
    res.download(file); // Set disposition and send it.
    console.log('file downloaded');
});


app.listen(3040, () => console.log('servidor corriendo'));