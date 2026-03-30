'use client'

import type { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Heading, RichText, Paragraph, FillImage } from '@/shared/components'
import { getStyles } from './styles'

interface TextWithImagesProps {
  label: string
  headingTKey: string
  text: string
  images: {
    src: string
    alt: string
  }[]
  styling?: Partial<ReturnType<typeof getStyles>>
}

export const TextWithImages: FC<TextWithImagesProps> = props => {
  const styles = getStyles(props.styling)

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.label}>{props.label}</div>
        <Heading
          text={<RichText tKey={props.headingTKey} />}
          className={styles.title}
        />
        <Paragraph text={props.text} />
      </div>
      <Swiper
        slidesPerView={1.1}
        spaceBetween={14}
        breakpoints={{
          900: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        className={styles.swiper}
      >
        {props.images.map(image => (
          <SwiperSlide key={image.src}>
            <FillImage className={styles.image} {...image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
