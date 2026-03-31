'use client'

import type { FC } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Heading, RichText, Paragraph } from '@/shared/components'
import { getStyles } from './styles'

const pictures = [
  {
    src: '/about-page/mission-swiper-1.webp',
    width: 1050,
    height: 1110,
  },
  {
    src: '/about-page/mission-swiper-2.webp',
    width: 1050,
    height: 1110,
  },
  {
    src: '/about-page/mission-swiper-3.webp',
    width: 1050,
    height: 1110,
  },
  {
    src: '/about-page/mission-swiper-4.webp',
    width: 1050,
    height: 1110,
  },
  {
    src: '/about-page/mission-swiper-5.webp',
    width: 1050,
    height: 1110,
  },
]

interface OurValuesProps {
  styling?: Partial<ReturnType<typeof getStyles>>
}

export const OurValues: FC<OurValuesProps> = props => {
  const t = useTranslations('about.mission')

  const styles = getStyles(props.styling)

  return (
    <section className={styles.section}>
      <div className={styles.textContent}>
        <Heading text={<RichText tKey='about.mission.title' />} />
        <Paragraph text={t('content')} className={styles.text} />
      </div>
      <Swiper
        className={styles.swiper}
        spaceBetween={20}
        slidesPerView={1.1}
        breakpoints={{
          600: {
            slidesPerView: 2.1,
          },
          1200: {
            spaceBetween: 40,
            slidesPerView: 3,
          },
        }}
      >
        {pictures.map((picture, index) => (
          <SwiperSlide key={picture.src + index}>
            <Image
              className={styles.image}
              {...picture}
              alt='Alternative text'
            />
            {/* @ts-expect-error - Argument of type `item${number}` is not assignable to parameter of type */}
            <div className={styles.slideText}>{t(`item${++index}`)}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
