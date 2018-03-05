'use strict'

const router = require('express').Router()
const { User } = require('../models/index')
const responseBadRequest = require('../helpers/responseHelper')

async function getUsersList(req, res) {
  console.log('Getting list of users')
  User.findAll({}).then((users) => {
    res.status(200)
    res.json(users)
  }).catch((error) => {
    res.status(400)
    res.send(responseBadRequest(error))
  })
}

async function getUser(req, res) {
  console.log('Get user')
  const id = Number(req.params.userId)
  User.findById(id).then((user) => {
    res.json(user)
  }).catch((error) => {
    res.status(400)
    res.send(responseBadRequest(error))
  })
}

async function createUser(req, res) {
  console.log('Create user')
  User.create({
    email: req.body.email,
    approved: false,
    accessToken: req.body.accessToken,
    lastlogedIn: req.body.lastlogedIn,
    firstlogedIn: req.body.firstlogedIn,
    submitted: req.body.submitted,
    phone: req.body.phone,
    name: req.body.name,
    surname: req.body.surname,
  }).then((user) => {
    res.json(user)
  }).catch((error) => {
    res.status(400)
    res.send(responseBadRequest(error))
  })
}

async function editUser(req, res) {
  console.log('Updating User')
  const id = Number(req.params.userId)
  User.findById(id).then((user) => {
    if (user) {
      user.updateAttributes({
        email: req.body.email,
        approved: req.body.approved,
        accessToken: req.body.accessToken,
        lastlogedIn: req.body.lastlogedIn,
        firstlogedIn: req.body.firstlogedIn,
        submitted: req.body.submitted,
        phone: req.body.phone,
        name: req.body.name,
        surname: req.body.surname,
      }).then((updatedUser) => {
        res.json(updatedUser)
        res.status(200)
      }).catch((err) => {
        res.status(400)
        res.send(responseBadRequest(err))
      })
    }
  })
}

async function updateApproveValue(req, res) {
  console.log('Approving user')
  const id = Number(req.params.userId)
  User.findById(id).then((user) => {
    if (user) {
      user.updateAttributes({
        approved: req.body.approved,
      }).then((updatedUser) => {
        res.json(updatedUser)
        res.status(200)
      }).catch((err) => {
        res.status(400)
        res.send(responseBadRequest(err))
      })
    }
  })
}

async function deleteUser(req, res) {
  console.log('Delete user')
  const id = Number(req.params.userId)
  User.destroy({ where: { id } }).then(() => {
    res.status(200)
    res.json()
  })
}

router.get('/api/users', getUsersList)
router.get('/api/users/:userId', getUser)
router.post('/api/users', createUser)
router.put('/api/users/:userId', editUser)
router.put('/api/users/:userId/approve', updateApproveValue)
router.delete('/api/users/:userId', deleteUser)

module.exports = {
  router,
  getUsersList,
  getUser,
  createUser,
  editUser,
  updateApproveValue,
  deleteUser,
}
