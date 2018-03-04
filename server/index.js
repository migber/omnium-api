'use strict'
require('dotenv').config()
const express = require('express')

const app = express()
const db = require('../config/connectDB')

db()

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(8080, () => console.log('Example app listening on port 8080!'))
app.use(require('body-parser').json({ type: 'application/json' }))
app.use(require('./routes/index'))
