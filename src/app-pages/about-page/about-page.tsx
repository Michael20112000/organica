import { getTranslations } from 'next-intl/server'
import { getNavigation } from '@/shared/hooks'
import { Hero } from '@/shared/sections'
import type { Swiper } from '@/shared/types'
import { DiscoverWholesomeCuisine } from './sections'

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
    </>
  )
}
