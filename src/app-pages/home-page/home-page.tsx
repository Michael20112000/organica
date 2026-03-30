import { getTranslations } from 'next-intl/server'
import { getSwiper, getMenuPearls } from '@/shared/api'
import { cn } from '@/shared/lib'
import {
  Hero,
  TextWithImages,
  TopDishes,
  ContentBlockWithImage,
  ParallaxPicture,
} from '@/shared/sections'
import { SavorBenefits } from './blocks'
import { WithLoveForNature } from './sections'

export const HomePage = async () => {
  const [t, swiper, menuPearls] = await Promise.all([
    getTranslations('home'),
    getSwiper(),
    getMenuPearls(),
  ])

  return (
    <>
      <Hero slides={swiper.data.slide} />
      <TextWithImages
        label={t('info.sectionLabel')}
        headingTKey='home.info.title'
        text={t('info.mission')}
        images={[
          {
            src: '/home-page/info-section-1.webp',
            alt: 'Alternative text',
          },
          {
            src: '/home-page/info-section-2.webp',
            alt: 'Alternative text',
          },
        ]}
        styling={{
          section: cn(
            'pt-80 pb-110',
            'md:pt-100 md:pb-130',
            'xl:pt-130 xl:pb-180',
          ),
        }}
      />
      <TopDishes menuPearls={menuPearls.data} />
      <ContentBlockWithImage
        content={<SavorBenefits />}
        image={{
          src: '/home-page/harmony-section-2.webp',
          alt: 'Alternative text',
        }}
      />
      <WithLoveForNature />
      <ParallaxPicture src='/home-page/parallax-large.webp' />
    </>
  )
}
