'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function Avatar() {
  const { resolvedTheme } = useTheme()

  const isDarkTheme = resolvedTheme === 'dark'

  const imgSrc = isDarkTheme
    ? '/images/avatar-dark.png'
    : '/images/avatar-light.png'

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setMounted(true)
    }, 100)
  }, [])

  if (!mounted) {
    return (
      <div className="relative flex size-28 items-center justify-center rounded-full">
        <div className="bg-surface h-full w-full animate-pulse rounded-full" />
      </div>
    )
  }

  return (
    <div className="relative flex size-28 items-center justify-center rounded-full">
      <Image
        src={imgSrc}
        alt="Avatar"
        className="outline-stroke rounded-full object-cover outline-2 -outline-offset-2"
        fill
      />
    </div>
  )
}
