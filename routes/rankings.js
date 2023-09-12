const { Router } = require('express')
const { EntityController } = require('../controllers/rankings.js')

const rankingsRouter = Router()

rankingsRouter.post('/', EntityController.calculateRanking)

module.exports = { rankingsRouter }
