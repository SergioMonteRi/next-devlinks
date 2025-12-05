'use client'

import { MoonStarsIcon, SunIcon } from '@phosphor-icons/react'
import * as Switch from '@radix-ui/react-switch'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

export function ThemeSwitcher() {
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
      <div className="flex h-10 items-center justify-center">
        <div className="border-stroke bg-surface relative h-6 w-16 rounded-full border">
          <div className="absolute top-1/2 -left-1 size-8 -translate-y-1/2 rounded-full bg-white" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-10 items-center justify-center">
      <Switch.Root
        data-slot="switch"
        className={
          'border-stroke bg-surface relative h-6 w-16 cursor-pointer rounded-full border backdrop-blur transition-all outline-none'
        }
        checked={checked}
        onCheckedChange={(newChecked) =>
          setTheme(newChecked ? 'light' : 'dark')
        }
      >
        <Switch.Thumb
          data-slot="switch-thumb"
          className={cn(
            'absolute top-1/2 -left-1 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-black shadow-xl transition-all duration-300',
            'hover:ring-highlight hover:ring-8 hover:ring-offset-2',
            'data-[state=checked]:translate-x-[36px]',
            checked && 'translate-x-[36px]',
          )}
        >
          {resolvedTheme === 'dark' ? (
            <MoonStarsIcon size={16} />
          ) : (
            <SunIcon size={16} />
          )}
        </Switch.Thumb>
      </Switch.Root>
    </div>
  )
}
