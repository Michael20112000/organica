import { getTranslations } from 'next-intl/server'
import { Hero } from '@/shared/sections'
import type { Swiper } from '@/shared/types'

export const ContactsPage = async () => {
  const t = await getTranslations('contact')
  const heroSlides: Swiper['data']['slide'] = [
    {
      supTitle: t('firstSection.phrase'),
      buttonText: t('firstSection.btnLabel'),
      buttonLink: 'https://menu.organica.com.ua',
      title: [
        {
          type: 'heading',
          level: 1,
          children: [
            {
              text: t('firstSection.title'),
              type: 'text',
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
        url: '/contacts-page/hero-bg.webp',
        provider: 'local',
        publishedAt: '2026-01-01T00:00:00.000Z',
        related: null,
      },
    },
  ]

  return (
    <>
      <Hero slides={heroSlides} />
    </>
  )
}
