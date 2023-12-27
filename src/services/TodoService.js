import axios from "axios";

const BASE_REST_API_URL = 'http://localhost:8083/api/todos';

export function getAllTodos() {
    return axios.get(BASE_REST_API_URL);
}