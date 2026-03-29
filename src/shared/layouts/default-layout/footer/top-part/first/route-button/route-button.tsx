'use client'

import { useTranslations } from 'next-intl'
import { DefaultButton } from '@/shared/components'
import { setDestination } from '../../map'
import { styles } from './styles'

export const RouteButton = () => {
  const t = useTranslations()

  return (
    <DefaultButton
      className={styles.button}
      variant='transparent'
      text={t('footer.btnLabelRoute')}
      onClick={setDestination}
    />
  )
}
