import { forwardRef } from 'react'
import { Arrow } from '@/shared/assets/svg'
import { Progress } from './progress'
import { styles } from './styles'

export const Navigation = forwardRef<SVGCircleElement>((props, ref) => {
  return (
    <>
      <Progress ref={ref} />
      <div className={styles.navigation}>
        <button className={styles.prev} aria-label='Previous slide'>
          <Arrow />
        </button>
        <button className={styles.next} aria-label='Next slide'>
          <Arrow />
        </button>
      </div>
    </>
  )
})

Navigation.displayName = 'Navigation'
