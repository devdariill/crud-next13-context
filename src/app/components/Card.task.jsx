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
    <article className='bg-zinc-900 hover:cursor-pointer' onClick={() => router.push(`/edit/${task.id}`)}>
      <header>{task.title}</header>
      <p>{task.description}</p>
      <button
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
        onClick={(e) => {
          e.stopPropagation()
          deleteTask(task.id)
        }}
      >Delete
      </button>
    </article>
  )
}
export default Card
