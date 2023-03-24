'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useTasks } from '../../context/TaskContext'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Toaster } from '../components/Toaster'

function Page ({ params }) {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm()
  console.log(params)
  const router = useRouter()
  const { tasks, createTask, updateTask } = useTasks()
  // const [task, setTask] = useState({
  //   title: '',
  //   description: ''
  // })
  const onSubmit = handleSubmit((data) => {
    params.id ? updateTask(params.id, data) : createTask(data.title, data.description)
    toast('Task saved')
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
      task && setValue('title', task.title)
      task && setValue('description', task.description)
      // task && setTask({ title: task.title, description: task.description })
    }
  }, [params.id, tasks, setValue])
  return (
    <form className='grid' onSubmit={onSubmit}>
      <Toaster />
      <input {...register('title', { required: true })} />
      {errors.title &&
        <span>This field is required</span>}
      <textarea {...register('description', { required: true })} />
      {errors.description &&
        <span>This field is required</span>}
      <button>Save</button>
    </form>
  )
}
export default Page
