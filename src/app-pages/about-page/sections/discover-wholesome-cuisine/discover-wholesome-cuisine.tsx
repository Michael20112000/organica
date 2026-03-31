'use client'

import type { FC } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Heading, RichText, Paragraph } from '@/shared/components'
import { getStyles } from './styles'

const pictures = [
  {
    url: '/about-page/about-swiper-1.webp',
    alt: 'Avocado toast',
  },
  {
    url: '/about-page/about-swiper-2.webp',
    alt: 'White bean and kiwi salad',
  },
  {
    url: '/about-page/about-swiper-3.webp',
    alt: 'Hummus with tahini-curry sauce',
  },
  {
    url: '/about-page/about-swiper-4.webp',
    alt: 'Coconut Pineapple Tart',
  },
]

interface DiscoverWholesomeCuisineProps {
  styling?: Partial<ReturnType<typeof getStyles>>
}

export const DiscoverWholesomeCuisine: FC<
  DiscoverWholesomeCuisineProps
> = props => {
  const t = useTranslations('about.info')

  const styles = getStyles(props.styling)

  return (
    <section className={styles.section}>
      <div className={styles.textContainer}>
        <Heading
          text={<RichText tKey='about.info.title' />}
          className={styles.heading}
        />
        <Paragraph text={t('content')} className={styles.text} />
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        slidesOffsetBefore={16}
        slidesOffsetAfter={16}
        breakpoints={{
          600: {
            slidesOffsetBefore: 50,
            slidesOffsetAfter: 50,
          },
          900: {
            spaceBetween: 30,
            slidesPerView: 2,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        loop
      >
        {[...pictures, ...pictures].map((picture, index) => (
          <SwiperSlide key={picture.url + index}>
            <Image
              className={styles.image}
              src={picture.url}
              width={613}
              height={700}
              alt={picture.alt}
              sizes='(min-width: 900px) 30vw, (min-width: 600px) 50vw, 80vw'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
