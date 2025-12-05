'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemedBackground() {
  const { resolvedTheme } = useTheme()

  const isDarkTheme = resolvedTheme === 'dark'

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setMounted(true)
    }, 100)
  }, [])

  if (!mounted) {
    return <div className="bg-surface absolute -z-10 h-full w-full" />
  }

  const backgroundImageSrc = isDarkTheme
    ? '/images/background-dark.png'
    : '/images/background-light.png'

  return (
    <Image
      src={backgroundImageSrc}
      alt="Background"
      fill
      className="-z-10 object-cover"
    />
  )
}
