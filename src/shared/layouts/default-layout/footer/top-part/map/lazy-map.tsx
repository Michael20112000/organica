'use client'

import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'
import { styles } from './styles'

const Map = dynamic(() => import('./map').then(m => m.Map), {
  ssr: false,
})

export const LazyMap = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '300px 0px',
  })

  return (
    <div ref={ref} className={styles.map('bg-olive/30')}>
      {inView && <Map />}
    </div>
  )
}
