const express = require('express')
const router = express.Router()
const createPath = require('../helpers/create-path')
const multer = require('multer')
const Blogs = require('../models/blogs-card-models')
const {
    createPlan,
    getBlogCard,
    getPlansCard,
    createBlog,
} = require('../controller/fond-corp-controller')
// const Blogs = require('../models/blogs-card-models')

// router.post('/api/off-plan', upload.single('image'), (req, res) => {

//     const { title, price } = req.body
//     const picture = req.file
//     console.log(req.file);
//     const blog = new Blogs({ title, price, picture })

    
//     res.send('Send file')
// })

// router.get('/api/create-blog', (req, res) => {
//     res.render(createPath('./crm/create-blogs'))
// })

// router.post('/api/upload', upload.single('image'), (req, res) => {
//     console.log(req.file);
//     res.send("Single file")
// })

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './static/image')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname)
    }
})

const upload = multer({ storage: fileStorageEngine })

router.post('/create-main-card', upload.single('image'), createBlog)

router.get('/create-main-card', getBlogCard)

router.post('/create-plan-card', upload.single('image'), createPlan)

router.get('/create-plan-card', getPlansCard)

router.get('/api/buy', (req, res) => {
    const title = 'Buy'

    res.render(createPath('buy'), { title })
})

router.get('/api/rent', (req, res) => {
    const title = 'Rent'

    res.render(createPath('buy'), { title })
})

router.get('/api/sell', (req, res) => {
    const title = 'Sell'

    res.render(createPath('sell'), { title })
})

router.get('/api/about-us', (req, res) => {
    const title = 'About us'

    res.render(createPath('about-us'), { title })
})

router.get('/api/property-management', (req, res) => {
    const title = 'Seagull Point'

    res.render(createPath('seagle-point'), { title })
})

module.exports = router