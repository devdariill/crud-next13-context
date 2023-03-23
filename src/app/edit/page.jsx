'use client'
import { useTasks } from '../../context/TaskContext'
function Page () {
  const values = useTasks()
  console.log(values)

  return (
    <div>Edit</div>
  )
}
export default Page
