const { Router } = require('express')
const { RankingController } = require('../controllers/rankings')

const rankingsRouter = Router()

rankingsRouter.get('/', RankingController.calculateRanking)

module.exports = { rankingsRouter }
