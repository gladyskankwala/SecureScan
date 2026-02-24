const axios = require("axios")
const { calculateScore} = require("../utils/scoreCalculator.js")

async function scanWebsite(url) {
    const response = await axios.get(url)

    const headers = response.headers

    const securityData = {
        https: url.startsWith("https"),
        hsts: headers["strict-transport-security"] ? true : false,
        xss: headers["x-xss-protection"] ? true : false,
        contentSecurityPolicy: headers["content-security-policy"] ? true : false,
        xFrameOptions: headers["x-frame-options"] ? true : false
    }

    const score = calculateScore(securityData)

    return {
        url,
        securityData,
        score
    }
}

module.exports = {scanWebsite}