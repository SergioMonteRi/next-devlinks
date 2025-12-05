import { Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import { SliceComponentProps } from '@prismicio/react'
import { FC } from 'react'

export type LinkProps = SliceComponentProps<Content.LinkSlice>

const Link: FC<LinkProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col justify-center gap-6 p-6"
    >
      {slice.primary.link.map((item, index) => (
        <PrismicNextLink
          key={index}
          field={item.url}
          className="border-stroke bg-surface hover:bg-surface-muted hover:border-text w-full cursor-pointer rounded-md border px-6 py-4 text-center transition-all duration-300"
        >
          <span className="text-text">{item.title}</span>
        </PrismicNextLink>
      ))}
    </section>
  )
}

export default Link
