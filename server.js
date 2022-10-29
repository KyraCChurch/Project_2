require('dotenv').config()
// Require modules
const express = require('express')
const methodOverride = require('method-override')
const db = require('./models/db')
const app = express()

// Configure the app (app.set)
/* Start Config */
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(cors())
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')
db.once('open', () => {
    console.log('connected to MongoDB Atlas')
  })
/* END CONFIG */

/* Start Middleware */
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/fruits', require('./controllers/routeController'))
app.use('/user', require('./controllers/authController'))
/* END Middleware */

// Tell the app to listen on a port
app.listen(3000, () => {
    console.log('Listening on port 3000')
})
