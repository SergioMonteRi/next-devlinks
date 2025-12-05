'use client'

import { GroupField } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { HomeDocumentDataAvatarItem, Simplify } from '@/prismicio-types'

interface AvatarProps {
  avatars: GroupField<Simplify<HomeDocumentDataAvatarItem>>
}

export function Avatar({ avatars }: AvatarProps) {
  const { resolvedTheme } = useTheme()

  const isLightTheme = resolvedTheme === 'light'

  const [mounted, setMounted] = useState(false)

  const avatarLightTheme = avatars.find((avatar) => avatar.is_light_theme)
  const avatarDarkTheme = avatars.find((avatar) => !avatar.is_light_theme)

  const currentAvatar = isLightTheme ? avatarLightTheme : avatarDarkTheme

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
      <PrismicNextImage
        field={currentAvatar?.avatar}
        className="outline-stroke size-full rounded-full object-cover outline-2 -outline-offset-2"
      />
    </div>
  )
}
