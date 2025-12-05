import { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { SliceComponentProps } from '@prismicio/react'
import { FC } from 'react'

export type SocialMediaLinksProps =
  SliceComponentProps<Content.SocialMediaLinksSlice>

const SocialMediaLinks: FC<SocialMediaLinksProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex items-center justify-center gap-6 p-6"
    >
      {slice.primary.social_media_links.map((item, index) => (
        <PrismicNextLink
          key={index}
          field={item.url}
          className="text-text hover:bg-highlight rounded-full p-2 transition-all duration-300"
        >
          <PrismicNextImage
            field={item.logo}
            alt={''}
            className="size-6 invert dark:invert-0"
          />
        </PrismicNextLink>
      ))}
    </section>
  )
}

export default SocialMediaLinks
