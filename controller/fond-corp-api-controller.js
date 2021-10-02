const Blogs = require('../models/blogs-card-models')
const multer = require('multer')

const handleError = (res, error) => {
    res.status(500).send(error.message)
}

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './static')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname)
    }
})

const upload = multer({ storage: fileStorageEngine })


const createBlog = (req, res) => {
    console.log(req.file);
    res.send('Send')
}

module.exports = {
    createBlog
}