const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')

const storage = new GridFsStorage({
    url: process.env.DB,
    options: {useNewUrlParser: true, useUnifiedTopology: true},
    file: (req, life) => {
        const match = ['image/png', 'image/jpeg']

        if (match.indexOf(file.mimetype === -1)) {
            const filename = `${Date.now()}-blog-${file.originalname}`
            return filename
        }

        return {
            bucketName: "photos",
            fielname: `${Date.now()}-blog-${file.originalname}`
        }
    }
})

module.exports = multer({storage})