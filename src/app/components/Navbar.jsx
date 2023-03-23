import Link from 'next/link'

function NavBar () {
  return (
    <header className='flex justify-evenly'>
      <Link href='/'>Task App </Link>
      <Link href='/new'>Add Task</Link>
    </header>
  )
}
export default NavBar
