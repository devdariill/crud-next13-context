import { useRouter } from 'next/navigation'
import { PropTypes } from 'prop-types'
import { useTasks } from '../../context/TaskContext'

Card.propTypes = {
  task: PropTypes.object.isRequired
}

function Card ({ task }) {
  const { deleteTask } = useTasks()
  const router = useRouter()
  return (
    <article className='bg-zinc-900 hover:cursor-pointer w-[320px] text-center gap-5 grid' onClick={() => router.push(`/edit/${task.id}`)}>
      <header>{task.title}</header>
      <p>{task.description}</p>
      <button
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-b'
        onClick={(e) => {
          e.stopPropagation()
          // const confirm = window.confirm('Are you sure you want to delete this task?')
          deleteTask(task.id)
        }}
      >Delete
      </button>
    </article>
  )
}
export default Card
