const express = require("express")
const cors = require("cors")
const helmet = require("helmet")

const app = express()

const scanRoutes = require("./routes/scanRoutes.js")

app.use(express.json())
app.use(cors())
app.use(helmet())


app.use('/api', scanRoutes)
const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})