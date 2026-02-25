import axios from "axios"

const API = axios.create({
    baseURL : "http://localhost:5000/api"
})

export const scanWebsite = (url) => {
    return API.post("/scan", {url})
}