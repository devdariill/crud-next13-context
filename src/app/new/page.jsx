'use client'
import { useState } from 'react'
import { useTasks } from '../../context/TaskContext'

function Page () {
  const { createTask } = useTasks()
  const [task, setTask] = useState()
  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    createTask(task.title, task.description)
    console.log(task)
  }

  return (
    <form className='grid' onSubmit={handleSubmit}>
      <input name='title' type='text' placeholder='Title' onChange={handleChange} />
      <textarea name='description' placeholder='Description' onChange={handleChange} />
      <button>Save</button>
    </form>
  )
}
export default Page
