'use client'
import { useState } from 'react'

function Page () {
  const [task, setTask] = useState()
  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value })

  return (
    <form className='grid'>
      <input name='title' type='text' placeholder='Title' onChange={handleChange} />
      <textarea name='description' placeholder='Description' onChange={handleChange} />
      <button>Save</button>
    </form>
  )
}
export default Page
