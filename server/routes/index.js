'use strict'

const express = require('express')

const router = express.Router()
const bodyParser = require('body-parser')
const models = require('../models/index')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(express.static('public'))

router.post('/cyclist', (req, res) => {
  console.log(req.body)
  console.log(req.body)
  models.Cyclist.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    uciCode: req.body.uciCode,
    team: req.body.team,
    nationality: req.body.nationality,
    birthdate: req.body.birthdate,
    gender: req.body.gender,
    category: req.body.category,
  }).then((cyclist) => {
    res.json(cyclist)
  })
})

router.post('/omnium', (req, res) => {
  console.log(req.body)
  console.log(req.body)
  models.Event.create({
    name: req.body.name,
    positionBefore: req.body.positionBefore,
    currentPosition: req.body.currentPosition,
    totalPoints: req.body.totalPoints,
    date: req.body.date,
  }).then((omnium) => {
    res.json(omnium)
  })
})

router.post('/race', (req, res) => {
  console.log(req.body)
  console.log(req.body)
  models.Race.create({
    name: req.body.name,
    elapseTime: req.body.elapseTime,
    avgSpeed: req.body.avgSpeed,
    description: req.body.description,
  }).then((race) => {
    res.json(race)
  })
})

router.post('/sprint', (req, res) => {
  console.log(req.body)
  console.log(req.body)
  models.Sprint.create({
    sprintNumber: req.body.sprintNumber,
    sprintPoints: req.body.sprintPoints,
  }).then((sprint) => {
    res.json(sprint)
  })
})

router.get('/scores', (req, res) => {
  console.log(req.body)
  console.log(req.body)
  models.Score.findAll({}).then((score) => {
    res.json(score)
  })
})

router.post('/score', (req, res) => {
  console.log(req.body)
  console.log(req.body)
  models.Score.create({
    raceNumber: req.body.raceNumber,
    lapPlusPoints: req.body.lapPlusPoints,
    lapMinusPoints: req.body.lapMinusPoints,
    points: req.body.points,
    finishPlace: req.body.finishPlace,
    raceDate: req.body.raceDate,
    place: req.body.place,
    totalPoints: req.body.totalPoints,
    dns: req.body.dns,
    dnq: req.body.dnq,
    dnf: req.body.dnf,
    bk: req.body.bk,
  }).then((score) => {
    res.json(score)
  })
})

module.exports = router
