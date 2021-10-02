const express = require('express')
const router = express.Router()
const createPath = require('../helpers/create-path')
const {
    getAllBlog,
    getPlan,
    postUser,
    getBuy,
    postBuy,
    postBlog,
    getRent,
    postRent,
    getPoint,
    postPoint,
    getQueryParam,
    getBuyParams
} = require('../controller/fond-corp-controller')
const Plan = require('../models/plan-card-models')

router.get('/', getAllBlog)

router.post('/', postBlog)

router.get('/off-plan', getPlan)

router.post('/off-plan', postUser)

router.get('/buy', paginatedResults(Plan), getBuyParams)

// router.get('/buy', getBuyParams)

router.get('/users')

router.post('/buy', postBuy)

router.get('/rent', getRent)

router.post('/rent', postRent)

router.get('/sell', (req, res) => {
    const title = 'Sell'

    res.render(createPath('sell'), { title })
})

router.get('/about-us', (req, res) => {
    const title = 'About us'

    res.render(createPath('about-us'), { title })
})

router.get('/seagull-point', getPoint)

router.post('/seagull-point', postPoint)

function paginatedResults(model) {
    return async (req, res, next) => {
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)
    
        const startIndex = (page - 1) * limit
        const endIndex = page * limit
    
        const results = {}
    
        if (endIndex < await model.countDocuments().exec()) {
            results.next = {
            page: page + 1,
            limit: limit
            }
        }
        
        if (startIndex > 0) {
            results.previous = {
            page: page - 1,
            limit: limit
            }
        } 

        try {
            results.results = await model.find().limit(limit).skip(startIndex).exec()
            res.paginatedResults = results
            next()
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }
}

module.exports = router