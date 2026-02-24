function calculateScore (data) {
    let score = 0

    if (data.https) score+=20;
    if (data.hsts) score+=20;
    if (data.xss) score+=20;
    if (data.contentSecurityPolicy) score+=20;
    if (data.xFrameOptions) score+=20;

    return score
}

module.exports = { calculateScore }