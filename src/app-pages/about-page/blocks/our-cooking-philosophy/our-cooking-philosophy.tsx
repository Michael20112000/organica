'use client'

import { useTranslations } from 'next-intl'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Heading, RichText, FillImage } from '@/shared/components'
import { styles } from './styles'

const pictures = [
  {
    src: '/about-page/principle-swiper-1.webp',
  },
  {
    src: '/about-page/principle-swiper-2.webp',
  },
  {
    src: '/about-page/principle-swiper-3.webp',
  },
  {
    src: '/about-page/principle-swiper-4.webp',
  },
  {
    src: '/about-page/principle-swiper-5.webp',
  },
]

export const OurCookingPhilosophy = () => {
  const t = useTranslations('about.principles')

  return (
    <div className={styles.block}>
      <Heading text={<RichText tKey='about.principles.title' />} />
      <Swiper spaceBetween={20} slidesOffsetBefore={16} slidesOffsetAfter={16}>
        {pictures.map((picture, index) => (
          <SwiperSlide key={picture.src}>
            <FillImage
              className={styles.image}
              src={picture.src}
              alt='Alternative text'
            />
            {/* @ts-expect-error - Argument of type `item${number}` is not assignable to parameter of type */}
            <div className={styles.label}>{t(`item${++index}`)}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
