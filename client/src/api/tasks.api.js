import axios from'axios'

const taskapi = axios.create({
    baseURL: "http://localhost:8000/tasks/api/v1/tasks/" // I add a slash at the end because it's necessary for Django
})

export const getAllTasks = () => taskapi.get("/") 

export const getTask = (id) => taskapi.get("/" + id + "/")

export const createTask = (task) => taskapi.post("/", task)

export const deleteTask = (id) => taskapi.delete("/" + id)

export const updateTask = (id, task) => taskapi.put("/" + id + "/", task)
