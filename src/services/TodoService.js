import axios from "axios";

const BASE_REST_API_URL = 'http://localhost:8083/api/todos';

// export function getAllTodos() {
//     return axios.get(BASE_REST_API_URL);
// }
export const getAllTodos = () => axios.get(BASE_REST_API_URL)

export const saveTodo = (todo) => axios.post(BASE_REST_API_URL, todo)

export const getTodo = (id) => axios.get(BASE_REST_API_URL + '/' + id)

export const updateTodo = (id, todo) => axios.put(BASE_REST_API_URL + '/' + id, todo)