import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { CircleLink } from '@/shared/components'
import { getContactsInfo } from '@/shared/hooks'
import { styles } from './styles'

export const NoPromotions = async () => {
  const [t, { socialsArray }] = await Promise.all([
    getTranslations('discount'),
    getContactsInfo(),
  ])

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>{t('noDataTitle')}</h3>
      <em className={styles.subtitle}>{t('noPromoPhrase')}</em>
      <div className={styles.socials}>
        {socialsArray.map(({ href, Icon }) => (
          <CircleLink key={href} href={href} target='_blank'>
            <Icon />
          </CircleLink>
        ))}
      </div>
      <Image
        src='/promotions-page/no-promotions.svg'
        preload
        fetchPriority='high'
        width={673}
        height={400}
        alt='No promotions'
      />
    </section>
  )
}
