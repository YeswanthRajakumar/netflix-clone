import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3"

 const request_instance = axios.create({
baseURL : BASE_URL
})

export default request_instance; 