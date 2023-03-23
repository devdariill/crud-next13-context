import { useRouter } from 'next/navigation'
import { PropTypes } from 'prop-types'

Card.propTypes = {
  task: PropTypes.object.isRequired
}

function Card ({ task }) {
  const router = useRouter()
  return (
    <article className='bg-zinc-900 hover:cursor-pointer' onClick={() => router.push(`/edit/${task.id}`)}>
      <header>{task.title}</header>
      <p>{task.description}</p>
      <button>Delete</button>
    </article>
  )
}
export default Card
