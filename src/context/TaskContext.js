'use client'
import { createContext, useContext } from 'react'

export const TaskContext = createContext()

export function useTasks () {
  const context = useContext(TaskContext)
  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider')
  }
  return context
}
export function TaskProvider ({ children }) {
  const tasks = [1, 2, 3]
  return (
    <TaskContext.Provider
      value={{ tasks }}
    >
      {children}
    </TaskContext.Provider>
  )
}
