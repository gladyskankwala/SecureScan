const express = require("express")
const router = express.Router();

const { scanWebsite } = require("../services/scanService.js")

router.post("/scan", async (req, res) => {
    const {url} = req.body

    if (!url) {
        return res.status(400).json({ error: "URL is required"})
    }

    try {
        const result = await scanWebsite(url)
        res.json(result)
    } catch (error) {
        console.error(error)
        return res.status(400).json({ error: "Scan failed"})
    }
})

module.exports = router