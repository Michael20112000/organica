import { Leaf } from '@/shared/assets/svg'
import { styles } from './styles'

export const Decorations = () => {
  return (
    <div className={styles.decorations}>
      <div className={styles.leafWrapper}>
        <Leaf width={19} height={23} className={styles.leaf} />
      </div>
      <div className={styles.verticalLine} />
    </div>
  )
}
