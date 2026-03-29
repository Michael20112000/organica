import { getTranslations } from 'next-intl/server'
import {
  Whatsapp,
  Telegram,
  Viber,
  Instagram,
  Threads,
  Facebook,
  X,
  Tiktok,
  YouTube,
} from '@/shared/assets/svg'

export const getContactsInfo = async () => {
  const t = await getTranslations()

  const contactsObject = {
    first: {
      label: t('drawer.booking'),
      label2: t('footer.phone'),
      label3: t('footer.booking'),
      phone: {
        text: '+380 63 787 17 77',
        href: 'tel:+380637871777',
      },
      messengers: [
        {
          Icon: Whatsapp,
          href: 'https://wa.me/380637871777',
        },
        {
          Icon: Telegram,
          href: 'https://t.me/organica_restaurant',
        },
        {
          Icon: Viber,
          href: 'viber://chat?number=%2B380637871777',
        },
      ],
    },
    second: {
      label: t('drawer.feedback'),
      label2: null,
      label3: t('footer.feedback'),
      phone: {
        text: '+380 95 549 53 44',
        href: 'tel:+380955495344',
      },
      messengers: [
        {
          Icon: Whatsapp,
          href: 'https://wa.me/380955495344',
        },
        {
          Icon: Telegram,
          href: 'https://t.me/organica_restaurant',
        },
        {
          Icon: Viber,
          href: 'viber://chat?number=%2B380637871777',
        },
      ],
    },
  }

  const socialsObject = {
    instagram: {
      href: 'https://www.instagram.com/organica.lviv?igsh=a2R6cmlkbTlpZmE=',
      Icon: Instagram,
    },
    threads: {
      href: 'https://www.threads.com/@organica.lviv',
      Icon: Threads,
    },
    facebook: {
      href: 'https://www.facebook.com/organica.lviv',
      Icon: Facebook,
    },
    x: {
      href: 'https://x.com/organicalviv?s=21',
      Icon: X,
    },
    tiktok: {
      href: 'https://www.tiktok.com/@organica.restaurant',
      Icon: Tiktok,
    },
    youtube: {
      href: 'https://www.youtube.com/@organica_lviv',
      Icon: YouTube,
    },
  }

  const email = 'info@organica.ua'

  return {
    contactsObject,
    contactsArray: Object.values(contactsObject),
    socialsObject,
    socialsArray: Object.values(socialsObject),
    email,
  }
}
