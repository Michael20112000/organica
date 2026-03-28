import { getTranslations } from 'next-intl/server'

export interface NavigationLink {
  href: string
  text: string
}

export const getNavigation = async () => {
  const t = await getTranslations()
  const choiceBaseUrl = 'https://menu.organica.ua'

  const navigationObject: Record<string, NavigationLink> = {
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

  const headerNavigation = {
    firstNavigationPart: [
      navigationObject.about,
      navigationObject.useful,
      navigationObject.contacts,
    ],
    secondNavigationBarPart: [
      navigationObject.menu,
      navigationObject.delivery,
      navigationObject.reservation,
    ],
  }

  return {
    navigationObject,
    navigationArray,
    headerNavigation,
  }
}
