import { getTranslations } from 'next-intl/server'
import { getContactsInfo } from '@/shared/hooks'
import { DefaultButton, CircleLink } from '@/shared/components'
import { googleMapsUrl } from '../map'
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
      <DefaultButton
        className={styles.button}
        variant='transparent'
        text={t('footer.btnLabelRoute')}
        href={googleMapsUrl}
        aria-label='Google Maps'
        target='_blank'
      />
      <br />
      <div className={styles.socials}>
        {socialsArray.map(({ href, Icon, label }) => (
          <CircleLink key={href} href={href} aria-label={label} target='_blank'>
            <Icon />
          </CircleLink>
        ))}
      </div>
    </div>
  )
}
