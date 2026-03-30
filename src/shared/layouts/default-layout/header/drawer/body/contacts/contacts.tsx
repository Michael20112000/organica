import { Fragment } from 'react'
import { getTranslations } from 'next-intl/server'
import { getContactsInfo } from '@/shared/hooks'
import { styles } from './styles'

export const Contacts = async () => {
  const [t, { contactsArray }] = await Promise.all([
    getTranslations(),
    getContactsInfo(),
  ])

  return (
    <>
      <div className={styles.title}>{t('drawer.address')}:</div>
      <div className={styles.text}>{t('fullAddress')}</div>
      {contactsArray.map(contact => (
        <Fragment key={contact.label}>
          <div className={styles.title}>{contact.label}:</div>
          <div className={styles.rowBetween}>
            <a className={styles.text} href={contact.phone.href}>
              {contact.phone.text}
            </a>
            <div className={styles.row}>
              {contact.messengers.map(({ href, Icon, label }) => (
                <a key={href} href={href} target='_blank' aria-label={label}>
                  <Icon className={styles.icon} width={32} height={32} />
                </a>
              ))}
            </div>
          </div>
        </Fragment>
      ))}
    </>
  )
}
