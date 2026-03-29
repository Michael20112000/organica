import { forwardRef } from 'react'
import { Leaf } from '@/shared/assets/svg'
import { styles } from './styles'

export const Progress = forwardRef<SVGCircleElement>((props, ref) => {
  return (
    <div className={styles.progressWrapper}>
      <svg viewBox='0 0 44 44' className={styles.progress}>
        <circle ref={ref} cx='22' cy='22' r='20' className={styles.circle} />
        <circle cx='22' cy='22' r='20' className={styles.secondCircle} />
      </svg>
      <Leaf className={styles.icon} />
      <div className={styles.verticalLine} />
    </div>
  )
})

Progress.displayName = 'Progress'
