const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT ?? 4000

const app = express()

app.use(express.json())
app.disable('x-powered-by')

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
