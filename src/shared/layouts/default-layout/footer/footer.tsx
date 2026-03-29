import { TopPart } from './top-part'
import { BottomPart } from './bottom-part'
import { styles } from './styles'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <TopPart />
      <BottomPart />
    </footer>
  )
}
