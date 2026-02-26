import { useState } from "react"
import ScanForm from "./components/Scanform"
import Resultcard from "./components/Resultcard"

function App() {

    const [result, setResult] = useState(null)

    return(
        <div style={{padding: "50px", fontFamily: "Arial"}}>
            <h1>🔐 SecureScan Lite</h1>
            <p>Scan your website security in seconds</p>

            <ScanForm setResult={setResult}/>
            <Resultcard result={result}/>
        </div>
    )
}

export default App