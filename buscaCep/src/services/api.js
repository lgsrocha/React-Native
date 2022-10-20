import axios from "axios"
//79003241/json
const api = axios.create ({
    baseURL: "https://viacep.com.br/ws"
})

export default api