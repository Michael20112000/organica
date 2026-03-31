import { getTranslations } from 'next-intl/server'
import { getNavigation } from '@/shared/hooks'
import { Hero, ContentBlockWithImage, TextWithImages } from '@/shared/sections'
import type { Swiper } from '@/shared/types'
import { OurCookingPhilosophy } from './blocks'
import {
  DiscoverWholesomeCuisine,
  OurVision,
  OurValues,
  OurTeam,
} from './sections'
import { cn } from '@/shared/lib'

export const AboutPage = async () => {
  const [t, { navigationObject }] = await Promise.all([
    getTranslations('about'),
    getNavigation(),
  ])

  const heroSlides: Swiper['data']['slide'] = [
    {
      supTitle: t('first.phrase'),
      buttonText: t('first.menu'),
      buttonLink: navigationObject.menu.href,
      title: [
        {
          type: 'heading',
          level: 1,
          children: [
            {
              text: t('first.content1'),
              type: 'text',
            },
            {
              text: t('first.content2'),
              type: 'text',
              italic: true,
            },
          ],
        },
      ],
      image: {
        documentId: '00000000-0000-0000-0000-000000000000',
        id: 1,
        name: 'about-hero.jpg',
        hash: 'about-hero',
        mime: 'image/jpeg',
        size: 0,
        url: '/about-page/first-screen-section.webp',
        provider: 'local',
        publishedAt: '2026-01-01T00:00:00.000Z',
        related: null,
      },
    },
  ]

  return (
    <>
      <Hero slides={heroSlides} />
      <DiscoverWholesomeCuisine />
      <OurVision />
      <OurValues />
      <OurTeam />
      <ContentBlockWithImage
        content={<OurCookingPhilosophy />}
        image={{
          src: '/home-page/harmony-section-2.webp',
          alt: 'Alternative text',
        }}
      />
      <TextWithImages
        label={t('booking.sectionLabel')}
        headingTKey='about.booking.title'
        text={t('booking.content')}
        images={[
          {
            src: '/about-page/booking-section-1.webp',
            alt: '',
          },
          {
            src: '/about-page/booking-section-2.webp',
            alt: '',
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
    </>
  )
}
