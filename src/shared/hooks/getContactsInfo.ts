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
          label: 'Whatsapp',
        },
        {
          Icon: Telegram,
          href: 'https://t.me/organica_restaurant',
          label: 'Telegram',
        },
        {
          Icon: Viber,
          href: 'viber://chat?number=%2B380637871777',
          label: 'Viber',
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
          label: 'Whatsapp',
        },
        {
          Icon: Telegram,
          href: 'https://t.me/organica_restaurant',
          label: 'Telegram',
        },
        {
          Icon: Viber,
          href: 'viber://chat?number=%2B380637871777',
          label: 'Viber',
        },
      ],
    },
  }

  const socialsObject = {
    instagram: {
      href: 'https://www.instagram.com/organica.lviv?igsh=a2R6cmlkbTlpZmE=',
      Icon: Instagram,
      label: 'Instagram',
    },
    threads: {
      href: 'https://www.threads.com/@organica.lviv',
      Icon: Threads,
      label: 'Threads',
    },
    facebook: {
      href: 'https://www.facebook.com/organica.lviv',
      Icon: Facebook,
      label: 'Facebook',
    },
    x: {
      href: 'https://x.com/organicalviv?s=21',
      Icon: X,
      label: 'X',
    },
    tiktok: {
      href: 'https://www.tiktok.com/@organica.restaurant',
      Icon: Tiktok,
      label: 'TikTok',
    },
    youtube: {
      href: 'https://www.youtube.com/@organica_lviv',
      Icon: YouTube,
      label: 'YouTube',
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
