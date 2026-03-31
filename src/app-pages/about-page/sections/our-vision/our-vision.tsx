'use client'

import type { FC } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Heading, RichText, Paragraph } from '@/shared/components'
import { getStyles } from './styles'

const pictures = [
  {
    src: '/about-page/vision-section-1.webp',
    width: 1260,
    height: 1100,
  },
  {
    src: '/about-page/vision-section-2.webp',
    width: 3688,
    height: 6000,
  },
]

interface OurVisionProps {
  styling?: Partial<ReturnType<typeof getStyles>>
}

export const OurVision: FC<OurVisionProps> = props => {
  const t = useTranslations()

  const styles = getStyles(props.styling)

  return (
    <section className={styles.section}>
      <div className={styles.textContent}>
        <div className={styles.label}>{t('about.vision.label')}</div>
        <Heading
          text={<RichText tKey='about.vision.title' />}
          className={styles.heading}
        />
        <Paragraph text={t('about.vision.content')} className={styles.text} />
      </div>
      <Swiper
        className={styles.swiper}
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          600: {
            spaceBetween: 30,
          },
          900: {
            spaceBetween: 40,
            slidesPerView: 2,
          },
        }}
      >
        {pictures.map(picture => (
          <SwiperSlide key={picture.src}>
            <Image
              className={styles.image}
              {...picture}
              alt='Alternative text'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
