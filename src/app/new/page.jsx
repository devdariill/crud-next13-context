'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTasks } from '../../context/TaskContext'

function Page ({ params }) {
  console.log(params)
  const router = useRouter()
  const { tasks, createTask, updateTask } = useTasks()
  const [task, setTask] = useState({
    title: '',
    description: ''
  })
  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    params.id ? updateTask(params.id, task) : createTask(task.title, task.description)
    router.push('/')
  }
  useEffect(() => {
    if (params.id) {
      const task = tasks.find(t => t.id === params.id)
      task && setTask({ title: task.title, description: task.description })
    }
  }, [params.id, tasks])
  return (
    <form className='grid' onSubmit={handleSubmit}>
      <input name='title' type='text' placeholder='Title' onChange={handleChange} value={task.title} />
      <textarea name='description' placeholder='Description' onChange={handleChange} value={task.description} />
      <button>Save</button>
    </form>
  )
}
export default Page
