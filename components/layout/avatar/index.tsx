import Image from 'next/image'
import { useTheme } from 'next-themes'

export function Avatar() {
  const { resolvedTheme } = useTheme()

  const isDark = resolvedTheme === 'dark'

  const imgSrc = isDark ? '/images/avatar-dark.png' : '/images/avatar-light.png'

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
