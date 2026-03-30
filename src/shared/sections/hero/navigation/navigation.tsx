import { forwardRef } from 'react'
import { Arrow } from '@/shared/assets/svg'
import { Progress } from './progress'
import { styles } from './styles'

export const Navigation = forwardRef<SVGCircleElement>((props, ref) => {
  return (
    <>
      <button className={styles.prev} aria-label='Previous slide'>
        <Arrow />
      </button>
      <Progress ref={ref} />
      <button className={styles.next} aria-label='Next slide'>
        <Arrow />
      </button>
    </>
  )
})

Navigation.displayName = 'Navigation'
