'use client'
import { createContext, useContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

export const TaskContext = createContext()

export function useTasks () {
  const context = useContext(TaskContext)
  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider')
  }
  return context
}
export function TaskProvider ({ children }) {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'my first task', description: 'description 1' },
    { id: 2, title: 'my second task', description: 'description 2' },
    { id: 3, title: 'my third task', description: 'description 3' }])

  const createTask = (title, description) => {
    const newTask = { id: uuid(), title, description }
    setTasks([...tasks, newTask])
  }

  return (
    <TaskContext.Provider
      value={{ tasks, createTask }}
    >
      {children}
    </TaskContext.Provider>
  )
}
