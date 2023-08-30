const { validateEntities } = require('../schemas/ranking.')
const { EntityModel } = require('../models/ranking.js')

class EntityController {
  static calculateRanking (req, res) {
    const result = validateEntities(req.body)

    if (!result.success) {
      // 422 Unprocessable Entity
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const orderedEntities = EntityModel.getOrderedEntities(result)

    res.status(200).json(orderedEntities)
  }
}

module.exports = EntityController
