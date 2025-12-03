'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'

import { Button } from '@/components'

export default function Home() {
  const { setTheme } = useTheme()

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('system')}>System</button>

      <div className="w-full max-w-xl">
        <div className="flex justify-center">
          <Button variant="primary" asChild>
            <Link href="/portfolio">Link</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
