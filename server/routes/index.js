'use strict'

const express = require('express')

const router = express.Router()
const bodyParser = require('body-parser')
const request = require('request')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(express.static('public'))


router.use((req, res, next) => {
  // check header or url parameters or post parameters for token
  const token = req.body.token || req.query.token || req.headers['x-access-token']
  const data = {
    access_token: token,
  }
  // decode token
  if (token) {
    request.post(`https://www.googleapis.com/oauth2/v3/tokeninfo`, { form: data }, (error, response, body) => {
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

router.use(require('../handlers/cyclist').router)
router.use(require('../handlers/event').router)
router.use(require('../handlers/race').router)
router.use(require('../handlers/score').router)
router.use(require('../handlers/sprint').router)

module.exports = router
