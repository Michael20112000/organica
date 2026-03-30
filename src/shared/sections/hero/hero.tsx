'use client'

import { type FC, useRef } from 'react'
import { Swiper as SwiperCarousel, SwiperSlide } from 'swiper/react'
import {
  EffectFade,
  Autoplay,
  Navigation as NavigationModule,
} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import { BlocksRenderer, FillImage, DefaultButton } from '@/shared/components'
import type { Swiper } from '@/shared/types'
import { Navigation } from './navigation'
import { styles } from './styles'

interface HeroProps {
  slides: Swiper['data']['slide']
}

export const Hero: FC<HeroProps> = ({ slides }) => {
  const progressCircle = useRef<SVGCircleElement | null>(null)

  if (!slides) return null

  return (
    <section className={styles.section}>
      <SwiperCarousel
        className={styles.swiperCarousel}
        modules={[EffectFade, Autoplay, NavigationModule]}
        navigation={{ prevEl: '.prev-el', nextEl: '.next-el' }}
        autoplay={
          slides.length > 1
            ? { delay: 8000, disableOnInteraction: false }
            : false
        }
        speed={1000}
        fadeEffect={{ crossFade: true }}
        effect='fade'
        onAutoplayTimeLeft={(_, __, progress) => {
          progressCircle.current?.style.setProperty(
            '--progress',
            String(1 - progress),
          )
        }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.image.url} className={styles.swiperSlide}>
            <FillImage
              className={styles.image}
              src={slide.image.url}
              preload={index === 0}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              alt={slide.image.alternativeText}
              sizes='100vw'
            />
            <div className={styles.eclipse} />
            <div className={styles.content}>
              <div className={styles.supTitle}>{slide.supTitle}</div>
              <BlocksRenderer content={slide.title} className={styles.title} />
              <DefaultButton
                text={slide.buttonText}
                href={slide.buttonLink}
                aria-label={slide.buttonText}
                target='_blank'
              />
            </div>
          </SwiperSlide>
        ))}
        <Navigation ref={progressCircle} />
      </SwiperCarousel>
    </section>
  )
}
