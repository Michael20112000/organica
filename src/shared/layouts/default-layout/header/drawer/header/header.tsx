import { LangSwitcher, Logotype } from '@/shared/components'
import { CloseButton } from './close-button'
import { styles } from './styles'

export const Header = () => {
  return (
    <div className={styles.header}>
      <LangSwitcher styling={{ langSwitcher: styles.langSwitcher }} />
      <Logotype />
      <CloseButton />
    </div>
  )
}
