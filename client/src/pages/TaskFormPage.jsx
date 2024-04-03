import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export function TaskFormPage() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm();

    const navigate = useNavigate() // Route navigation

    const params = useParams() // Get URL params

    // Function to handle form submission and validate fields
    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateTask(params.id, data) // Update existing task
            toast.success('Tarea actualizada', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            })
        } else {
            await createTask(data); // Create new task
            toast.success('Tarea creada', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            })
        }
        navigate("/tasks")
    })

    useEffect(() => {
        async function loadTask() { // Load existing task data
            if (params.id) {
                const {
                    data: { title, description },
                } = await getTask(params.id);
                setValue('title', title)
                setValue('description', description)
            }
        }
        loadTask();
    }, [])

    return (
        <div className='max-w-xl mx-auto'>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="title"
                    {...register("title", { required: true })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                />
                {/* Error message for the "title" field */}
                {errors.title && <span>title is required</span>}
                <textarea rows="3" placeholder="description"
                    {...register("description", { required: true })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                ></textarea>
                {/* Error message for the "description" field */}
                {errors.description && <span>description is required</span>}
                <button
                    className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'
                >Save</button>
            </form>
            {params.id &&
                <div className='flex justify-end'>
                    <button
                        className='bg-red-500 p-3 rounded-lg w-48 mt-3'
                        onClick={async () => { // Delete existing task
                            const accepted = window.confirm('are you sure?')
                            if (accepted) {
                                await deleteTask(params.id)
                                toast.success('Tarea eliminada', {
                                    position: "bottom-right",
                                    style: {
                                        background: "#101010",
                                        color: "#fff"
                                    }
                                })
                                navigate("/tasks")
                            }
                        }}>Delete</button>
                </div>
            }
        </div>
    )
}
