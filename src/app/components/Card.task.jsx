
import { PropTypes } from 'prop-types'

Card.PropTypes = {
  task: PropTypes.object.isRequired
}

function Card ({ task }) {
  return (
    <article className='bg-zinc-900'>
      <header>{task.title}</header>
      <p>{task.description}</p>
      <button>Delete</button>
    </article>
  )
}
export default Card
