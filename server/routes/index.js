'use strict'

const express = require('express')

const router = express.Router()
const bodyParser = require('body-parser')
const request = require('request')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(express.static('public'))


router.use((req, res, next) => {
  console.log('token validation')
  console.log(req)
  // check header or url parameters or post parameters for token
  const bearerToken = req.body.token || req.query.token || req.headers.authorization
  console.log(bearerToken)
  const token = bearerToken.replace('Bearer ', '')
  console.log(token)
  const data = {
    access_token: token,
  }
  console.log(data)
  // decode token
  if (token) {
    console.log(token)
    request.post('https://www.googleapis.com/oauth2/v3/tokeninfo', { form: data }, (error, response, body) => {
      // console.log(response)
      if (response.statusCode === 200) {
        console.log(body)
        next()
      } else {
        res.status(response.statusCode)
        res.send(response.body)
      }
    })
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.',
    })
  }
})

router.use(require('../controllers/cyclist').router)
router.use(require('../controllers/event').router)
router.use(require('../controllers/race').router)
router.use(require('../controllers/score').router)
router.use(require('../controllers/sprint').router)
router.use(require('../controllers/user').router)

module.exports = router
