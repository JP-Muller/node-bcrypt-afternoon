require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const bcrypt = require('bcryptjs')
const authCtrl = require('./controllers/authController')

const { CONNECTION_STRING, SESSION_SECRET } = process.env
const PORT = 4000

const app = express()

app.use(express.json())


app.post('/auth/register')

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        console.log('Pulled Data!')
    })

app.use(
    session({
        resave: true,
        saveUninitialized: false,
        secret: SESSION_SECRET
    })
)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})


