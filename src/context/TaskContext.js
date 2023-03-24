'use client'
import { createContext, useContext } from 'react'
import { v4 as uuid } from 'uuid'
import useLocalStorage from '../hooks/useLocaleStorage'

export const TaskContext = createContext()

export function useTasks () {
  const context = useContext(TaskContext)
  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider')
  }
  return context
}
export function TaskProvider ({ children }) {
  // const [tasks, setTasks] = useState([])
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const createTask = (title, description) => {
    const newTask = { id: uuid(), title, description }
    setTasks([...tasks, newTask])
  }
  const deleteTask = (id) => setTasks([...tasks.filter(task => task.id !== id)])
  const updateTask = (id, newTask) => setTasks([...tasks.map(t => t.id === id ? { ...t, ...newTask } : t)])

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        updateTask
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
