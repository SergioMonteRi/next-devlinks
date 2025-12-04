'use client'

import { MoonStarsIcon, SunIcon } from '@phosphor-icons/react'
import * as Switch from '@radix-ui/react-switch'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from '@/components'

export default function Home() {
  const { setTheme, resolvedTheme } = useTheme()

  const checked = resolvedTheme === 'dark' ? false : true

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setMounted(true)
    }, 100)
  }, [])

  if (!mounted) {
    return (
      <div className="h-6 w-16 rounded-full border backdrop-blur transition-all outline-none" />
    )
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Switch.Root
        data-slot="switch"
        className={
          'relative h-6 w-16 rounded-full border backdrop-blur transition-all outline-none'
        }
        checked={checked}
        onCheckedChange={(newChecked) =>
          setTheme(newChecked ? 'light' : 'dark')
        }
      >
        <Switch.Thumb
          data-slot="switch-thumb"
          className="absolute top-1/2 -left-1 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-amber-700 transition-transform data-[state=checked]:translate-x-[36px]"
        >
          {resolvedTheme === 'dark' ? (
            <MoonStarsIcon className="text-white" size={16} />
          ) : (
            <SunIcon className="text-black" size={16} />
          )}
        </Switch.Thumb>
      </Switch.Root>

      <div className="mt-20 w-full max-w-xl">
        <div className="flex justify-center">
          <Button variant="primary" asChild>
            <Link href="/portfolio">Link</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
