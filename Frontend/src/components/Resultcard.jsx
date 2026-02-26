const Resultcard = ({ result }) => {
    if (!result || !result.securityData) return null;

    const {securityData, score} = result;


    return (
        <div style={{border: "1px solid #ccc", padding: "20px", width: "400px"}}>
            <h2>Security Score: {score}</h2>

            <ul>
                <li>HTTPS: {securityData.https ? "✅" : "❌"}</li>
                <li>HSTS: {securityData.hsts ? "✅" : "❌"}</li>
                <li>XSS Protection: {securityData.xss ? "✅" : "❌"}</li>
                <li>CSP: {securityData.contentSecurityPolicy ? "✅" : "❌"}</li>
                <li> X-Frame-Options:{securityData.xFrameOptions ? "✅" : "❌"}</li>
            </ul>
        </div>
    )
}

export default Resultcard;