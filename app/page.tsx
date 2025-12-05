import { SliceZone } from '@prismicio/react'
import { notFound } from 'next/navigation'

import { Avatar, ThemedBackground, ThemeSwitcher } from '@/components'
import { createClient } from '@/prismicio'
import { components } from '@/slices'

export default async function HomePage() {
  const client = createClient()

  const page = await client.getSingle('home').catch((err) => {
    console.error(err)
    return notFound()
  })

  console.log(page)

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <ThemedBackground />

      <div className="flex flex-col items-center gap-2 p-6">
        <Avatar avatars={page.data.avatar} />

        <h1 className="text-text font-medium">{page.data.user_name}</h1>
      </div>

      <ThemeSwitcher />

      <div className="w-full">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </div>
  )
}
