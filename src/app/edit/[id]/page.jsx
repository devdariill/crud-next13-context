import { PropTypes } from 'prop-types'

Page.PropTypes = {
  id: PropTypes.string.isRequired
}

function Page ({ params }) {
  return (
    <div>Edit {params.id}</div>
  )
}
export default Page
