'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTasks } from '../../context/TaskContext'
import { useForm } from 'react-hook-form'

function Page ({ params }) {
  const { register, handleSubmit } = useForm()
  console.log(params)
  const router = useRouter()
  const { tasks, createTask, updateTask } = useTasks()
  const [task, setTask] = useState({
    title: '',
    description: ''
  })
  const onSubmit = handleSubmit((data) => {
    params.id ? updateTask(params.id, task) : createTask(task.title, task.description)
    router.push('/')
  })
  // const handleChange = (e) =>
  //   setTask({ ...task, [e.target.name]: e.target.value })
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   params.id ? updateTask(params.id, task) : createTask(task.title, task.description)
  //   router.push('/')
  // }
  useEffect(() => {
    if (params.id) {
      const task = tasks.find(t => t.id === params.id)
      task && setTask({ title: task.title, description: task.description })
    }
  }, [params.id, tasks])
  return (
    <form className='grid' onSubmit={onSubmit}>
      <input {...register('title', { required: true })} />
      <textarea {...register('description', { required: true })} />
      <button>Save</button>
    </form>
  )
}
export default Page
