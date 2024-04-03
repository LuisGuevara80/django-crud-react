import { useEffect, useState } from "react"
import { getAllTasks } from "../api/tasks.api"
import { TaskCard } from "./TasksCard"

export function TasksList() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function loadTasks() {
            // Make a request to fetch all tasks using the getAllTasks function
            const res = await getAllTasks()
            // Set the tasks state with the data retrieved from the server response
            setTasks(res.data)
        }
        // Call loadTasks when the component mounts for the first time.
        loadTasks()
    }, [])

    return (
        <div className="grid grid-cols-3 gap-3">
            {tasks.map(task => (
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>
    )
}