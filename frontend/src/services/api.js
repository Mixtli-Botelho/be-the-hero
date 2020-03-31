import axios from 'axios' // Um client HTTP, responsável por fazer chamadas à nossa API do "backend" (para integrar o "backend" com o "frontend")

const api = axios.create({
    baseURL: "http://localhost:3333"
})

export default api