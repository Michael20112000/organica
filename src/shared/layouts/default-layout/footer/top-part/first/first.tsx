import { getTranslations } from 'next-intl/server'
import { getContactsInfo } from '@/shared/hooks'
import { CircleLink } from '@/shared/components'
import { RouteButton } from './route-button'
import { styles } from './styles'

export const First = async () => {
  const t = await getTranslations()
  const { socialsArray } = await getContactsInfo()

  return (
    <div className={styles.first}>
      <div className={styles.label}>{t('footer.address')}:</div>
      <div className={styles.text1}>{t('address')}</div>
      <div className={styles.text2}>
        {t('footer.mondayShort')}-{t('footer.sundayShort')}: 09:00-22:00
      </div>
      <RouteButton />
      <br />
      <div className={styles.socials}>
        {socialsArray.map(({ href, Icon }) => (
          <CircleLink key={href} href={href} target='_blank'>
            <Icon />
          </CircleLink>
        ))}
      </div>
    </div>
  )
}
