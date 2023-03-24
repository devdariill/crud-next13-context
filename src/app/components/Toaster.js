'use client'
import dynamic from 'next/dynamic'

// ssr: false is required to prevent Next.js from rendering the component on the server
const Toaster = dynamic(
  async () => {
    const { Toaster } = await import('sonner')
    return Toaster
  }, { ssr: false })

export { Toaster }
