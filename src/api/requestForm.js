import axios from "axios";

const requestForm = axios.create ({
    baseURL: 'http://localhost:5000/api/',
    headers: {
        Accept: 'application/json'
    }
})

export default requestForm