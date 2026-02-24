const express = require("express")
const cors = require("cors")
const helmet = require("helmet")

const scanRoutes = require("./routes/scanRoutes.js")

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())

app.use('/api', scanRoutes)
const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})