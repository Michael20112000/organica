import { getTranslations } from 'next-intl/server'

export const getNavigation = async () => {
  const t = await getTranslations()
  const choiceBaseUrl = process.env.CHOICE_BASE_URL!

  const navigationObject = {
    home: {
      href: '/',
      text: t('main'),
    },
    menu: {
      href: choiceBaseUrl,
      text: t('menu'),
    },
    about: {
      href: '/about',
      text: t('aboutUs'),
    },
    reservation: {
      href: `${choiceBaseUrl}/booking`,
      text: t('reservation'),
    },
    useful: {
      href: '/useful',
      text: t('useful'),
    },
    delivery: {
      href: `${choiceBaseUrl}/delivery`,
      text: t('delivery'),
    },
    contacts: {
      href: '/contacts',
      text: t('contacts'),
    },
    events: {
      href: '/events',
      text: t('events'),
    },
    reviews: {
      href: '/reviews',
      text: t('feedback'),
    },
  }

  const navigationArray = Object.values(navigationObject)

  return {
    navigationObject,
    navigationArray,
  }
}
