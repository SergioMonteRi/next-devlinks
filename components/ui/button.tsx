import { Slot } from '@radix-ui/react-slot'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'w-full text-center cursor-pointer rounded-md px-6 py-4 transition-all duration-300',

  variants: {
    variant: {
      primary: twMerge(
        'border border-stroke bg-surface ',
        'hover:bg-surface-muted hover:border-text',
      ),
      icon: twMerge('w-fit p-2 text-text rounded-full', 'hover:bg-highlight'),
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

  // return <button className="min-w-40 bg-amber-50" {...props} />

  return <Component {...props} className={button({ variant, className })} />
}
