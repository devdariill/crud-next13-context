import './globals.css'
import { TaskProvider } from '../context/TaskContext'
import NavBar from './components/NavBar'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        <TaskProvider>
          <NavBar />
          {children}
        </TaskProvider>
      </body>
    </html>
  )
}
