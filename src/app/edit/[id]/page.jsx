import { PropTypes } from 'prop-types'

Page.PropTypes = {
  id: PropTypes.string.isRequired
}

function Page ({ params }) {
  return (
    <div>Editing {params.id}</div>
  )
}
export default Page
