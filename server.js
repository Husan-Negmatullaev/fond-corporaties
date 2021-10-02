require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const createPath = require('./helpers/create-path')
const breadcrumbs = require('express-breadcrumbs');
const connection = require('./db/db')
const routerFondApiCorp = require('./routes/fond-corp-api-router')
const routerFondCorp = require('./routes/fond-corp-router')
const { errorMsg } = require('./helpers/console-colors')
const os = require('os')
const app = express()

app.set('view engine', 'ejs')

connection()

const PORT = process.env.PORT || 3000

app.listen(PORT, (err) => {
    err ? console.log(errorMsg(err)) : null
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(express.static('static'))

app.use(breadcrumbs.init());

app.use(breadcrumbs.setHome());

app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: false }))

app.use(routerFondApiCorp)
app.use(routerFondCorp)

app.use((req, res) => {
    const title = 'Error page'

    res
    .status(404)
    .render(createPath('error-page'), { title })
})