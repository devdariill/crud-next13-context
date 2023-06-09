'use client'
import { useTasks } from '../context/TaskContext'
import Card from './components/Card.task'
export default function Home () {
  const { tasks } = useTasks()
  return (
    <>
      <main>Holi</main>
      <section className='gap-5 flex flex-col items-center'>
        {
        tasks.map((task) => (
          <Card key={task.id} task={task} />
        ))
      }
      </section>
    </>
  )
}
