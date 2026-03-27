import { getTranslations } from 'next-intl/server'
import { Whatsapp, Telegram, Viber } from '@/shared/assets/svg'

export const getContactsInfo = async () => {
  const t = await getTranslations()

  const contactsObject = {
    first: {
      label: t('drawer.booking'),
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

  const email = 'info@organica.ua'

  return {
    contactsObject,
    contactsArray: Object.values(contactsObject),
    email,
  }
}
