const express = require('express')
const { rankingsRouter } = require('./routes/rankings.js')
require('dotenv').config()

const app = express()
app.use(express.json())
app.disable('x-powered-by')

app.use('/calculate_ranking', rankingsRouter)

const PORT = process.env.PORT ?? 4000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
