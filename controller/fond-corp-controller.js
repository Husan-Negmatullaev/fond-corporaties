const Blogs = require('../models/blogs-card-models')
const createPath = require('../helpers/create-path');
const Plan = require('../models/plan-card-models');

const handleError = (res, error) => {
    console.log(error);
    res.render(createPath('error'), { title: 'Error' })
}

const getAllBlog = (req, res) => {
    req.breadcrumbs('Home');
    const title = 'Main'
    
    Blogs
    .find()
    .limit(6)
    .then(blogs => res.render(createPath('index'), { title, blogs }))
    .catch(err => handleError(res, err))
}

const postBlog = (req, res) => {
    const { select1, select2, select3, select4, city } = req.body
    
    res.redirect('/')
}

const createBlog = (req, res) => {
    const picture = req.file.filename
    const { title, price } = req.body
    const blog = new Blogs({title, picture, price})

    blog
    .save()
    .then(result => res.send(result))
    .catch(err => handleError(res, err))
}

const createPlan = (req, res) => {
    const image = req.file.filename
    const { title, description } = req.body
    const plan = new Plan({ image, title, description })

    plan
    .save()
    .then(result => res.redirect('/off-plan'))
    .catch(err => handleError(res, err))
}

const getPlan = (req, res) => {
    req.breadcrumbs('Off-plan');
    const title = 'Off-plan'

    Plan
    .find()
    .then(plan => res.render(createPath('off-plan'), { title, plan }))
    .catch(err => handleError(res, err))
}

const getPlansCard = (req, res) => {
    res.render(createPath('./crm/create-plan-card'))
}

const getBlogCard = (req, res) => {
    res.render(createPath('./crm/create-blogs'))
}

const postUser = (req, res) => {
    const { name, email, phone, country } = req.body
    console.log('------------', name, email, phone, country, '------------');
    console.log(req.body);
    res.redirect('/off-plan')
}

const getBuy = (req, res) => {
    res.render(createPath('buy'))
}

const getBuyParams = (req, res) => {
    const plan = res.paginatedResults.results
    req.breadcrumbs('Buy');

    // res.json(res.paginatedResults)

    res.render(createPath('buy'), { 
        plan,
        breadcrumbs: req.breadcrumbs()
    })
    
    // res.json(res.paginatedResults.results)
}

const getQueryParam = (req, res) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const results = {}

    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: limit
        }
    }

    results.results = images.slice(startIndex, endIndex)

    if (endIndex < images.length) {
        results.next = {
            page: page + 1,
            limit: limit
        }
    }

    res.json(results)
}

const postBuy = (req, res) => {
    const { select1, select2, select3, select4, receip } = req.body
    console.log('------------', select1, select2, select3, select4, receip, '------------');
    console.log(req.body);
    res.redirect('/buy')
}

const getRent = (req, res) => {
    req.breadcrumbs('Rent');
    const title = 'Buy'

    Plan
    .find()
    .then(plan => res.render(createPath('rent'), { 
        title,
        plan,
        breadcrumbs: req.breadcrumbs(),
    }))
    .catch(err => handleError(res, err))
}

const postRent = (req, res) => {
    const { select1, select2, select3, select4, receip } = req.body
    console.log('------------', select1, select2, select3, select4, receip, '------------');
    console.log(req.body);
    res.redirect('/rent')
}

const getPoint = (req, res) => {
    const title = 'Seagull Point'
    req.breadcrumbs('seagull point');

    res.render(createPath('seagle-point'), { title })
}

const postPoint = (req, res) => {
    const { name, surname, phone, select1 } = req.body
    console.log('------------', select1, name, surname, phone, '------------');
    console.log(req.body);
    res.redirect('/seagull-point')
}

module.exports = {
    postBlog,
    getAllBlog,
    getBlogCard,
    createBlog,
    createPlan,
    getPlansCard,
    getPlan,
    postUser,
    getBuy,
    postBuy,
    getRent,
    postRent,
    getPoint,
    postPoint,
    getQueryParam,
    getBuyParams    
}