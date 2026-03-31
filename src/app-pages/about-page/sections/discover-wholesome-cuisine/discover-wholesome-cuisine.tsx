'use client'

import type { FC } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Heading, RichText, Paragraph } from '@/shared/components'
import { getStyles } from './styles'

// 1-4 pictures are duplicated into 5-8
// This is necessary for the swiper to work correctly with loop
// 1 === 5
// 2 === 6
// 3 === 7
// 4 === 8
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
  {
    url: '/about-page/about-swiper-5.webp',
    alt: 'Avocado toast',
  },
  {
    url: '/about-page/about-swiper-6.webp',
    alt: 'White bean and kiwi salad',
  },
  {
    url: '/about-page/about-swiper-7.webp',
    alt: 'Hummus with tahini-curry sauce',
  },
  {
    url: '/about-page/about-swiper-8.webp',
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
        {pictures.map(picture => (
          <SwiperSlide key={picture.url}>
            <Image
              className={styles.image}
              src={picture.url}
              width={613}
              height={700}
              alt={picture.alt}
              sizes='(max-width: 599px) 80vw, (max-width: 899px) 50vw, 30vw'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
