'use client'

import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  YoutubeLogoIcon,
} from '@phosphor-icons/react'
import Link from 'next/link'

import { Avatar, Button, ThemeSwitcher } from '@/components'

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-2 p-6">
        <Avatar />

        <span className="text-text font-medium">@juliasilva</span>
      </div>

      <ThemeSwitcher />

      <div className="w-full">
        <div className="flex flex-col justify-center gap-6 p-6">
          <Button variant="primary" asChild>
            <Link href="/">Inscreva-se no NLW</Link>
          </Button>
          <Button variant="primary" asChild>
            <Link href="/">Baixe meu e-book</Link>
          </Button>
          <Button variant="primary" asChild>
            <Link href="/">Veja meu portfólio</Link>
          </Button>
          <Button variant="primary" asChild>
            <Link href="/">Conheça meu curso</Link>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 p-6">
          <Button variant="icon" asChild>
            <Link href="/github">
              <GithubLogoIcon size={24} />
            </Link>
          </Button>
          <Button variant="icon" asChild>
            <Link href="/instagram">
              <InstagramLogoIcon size={24} />
            </Link>
          </Button>
          <Button variant="icon" asChild>
            <Link href="/youtube">
              <YoutubeLogoIcon size={24} />
            </Link>
          </Button>
          <Button variant="icon" asChild>
            <Link href="/linkedin">
              <LinkedinLogoIcon size={24} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
