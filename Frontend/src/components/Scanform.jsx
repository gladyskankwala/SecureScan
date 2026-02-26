import { useState } from "react";
import { scanWebsite } from "../services/Api.js";


const ScanForm = ({ setResult }) => {
    const [url, setUrl] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()


        if (!url) return alert("Enter a URL")

        try {
            setLoading(true);
            console.log("sending url: ", url)
            const response = await scanWebsite(url)
            setResult(response.data)
        } catch (error) {
            alert("scan failed")
        } finally {
            setLoading(false)
        }
    }

    return(
        <form onSubmit={handleSubmit} style={{marginBottom: "20px"}}>
            <input
              type="text"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              style={{padding: "10px", width: "300px"}}
            />
            <button type="submit" style={{padding: "10px", marginLeft: "10px"}}>
                {loading ? "scanning..." : "Scan"}
            </button>
        </form>
    )
}

export default ScanForm;