import { Fragment } from 'react'
import { getTranslations } from 'next-intl/server'
import { DefaultButton } from '@/shared/components'
import { getContactsInfo } from '@/shared/hooks'
import { styles } from './styles'

export const Second = async () => {
  const [t, { contactsArray }] = await Promise.all([
    getTranslations(),
    getContactsInfo(),
  ])

  return (
    <div className={styles.second}>
      {contactsArray.map(contact => (
        <Fragment key={contact.label}>
          {contact.label2 && (
            <div className={styles.label}>{contact.label2}:</div>
          )}
          <div className={styles.note}>{contact.label3}:</div>
          <a className={styles.phone} href={contact.phone.href}>
            {contact.phone.text}
          </a>
          <div className={styles.messengers}>
            {contact.messengers.map(({ href, Icon, label }) => (
              <a key={href} href={href} target='_blank' aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </Fragment>
      ))}
      <DefaultButton
        className={styles.leaveFeedbackButton}
        variant='transparent'
        text={t('footer.btnLabelFeedback')}
        href='/'
      />
    </div>
  )
}
