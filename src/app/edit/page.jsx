'use client'
import { useTasks } from '../../context/TaskContext'
function Page () {
  const { tasks } = useTasks()
  console.log(tasks)

  return (
    <div>Edit {tasks.length}</div>
  )
}
export default Page
