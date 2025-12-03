import { Slot } from '@radix-ui/react-slot'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'min-w-40 text-center cursor-pointer rounded-md px-6 py-4 transition-all duration-300',

  variants: {
    variant: {
      primary: twMerge(
        'border border-black/50 bg-black/5 hover:border-black hover:bg-black/2',
        'dark:white/50 dark:bg-white/10 dark:hover:border-white dark:hover:bg-white/5',
      ),
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    asChild?: boolean
  }

export function Button({ asChild, variant, className, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button'

  //   return <button className="min-w-40 bg-amber-50" {...props} />

  return <Component {...props} className={button({ variant, className })} />
}
