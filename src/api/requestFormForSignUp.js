import axios from "axios";

const requestForm = axios.create ({
    baseURL: 'http://localhost:5000/api/',
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        // token : localStorage.getItem('user')
    }
})

export default requestForm