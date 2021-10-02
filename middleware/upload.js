const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')

const storage = new GridFsStorage({
    url: process.env.DB,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, res) => {
        const match = ['image/png', "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-any-name-${file.originalname}`;
            return filename
        }

        return {
            bucketName: 'phone',
            filename: `${Date.now()}-any-name-${file.originalname}`
        }
    }
})

module.exports = multer({storage})