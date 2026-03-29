import { getTranslations } from 'next-intl/server'
import { DefaultButton } from '@/shared/components'
import { Navigation } from './navigation'
import { Copyright } from './copyright'
import { styles } from './styles'

export const BottomPart = async () => {
  const t = await getTranslations()

  return (
    <div className={styles.bottomPart}>
      <Navigation />
      <Copyright />
      <DefaultButton
        className={styles.leaveFeedbackButton}
        variant='transparent'
        href='/'
        text={t('contact.contactsSection.btnLabelFeedback')}
      />
    </div>
  )
}
