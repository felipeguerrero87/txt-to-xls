const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer')
const mineType = require('mime-types')

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


app.listen(3040, () => console.log('servidor corriendo'));