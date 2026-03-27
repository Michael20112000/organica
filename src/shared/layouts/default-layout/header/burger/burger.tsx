'use client'

import type { ReactNode, FC } from 'react'
import { useDrawerStore } from '@/shared/store/drawer-store'
import { styles } from './styles'

interface BurgerProps {
  drawer: ReactNode
}

export const Burger: FC<BurgerProps> = props => {
  const { isOpen, open } = useDrawerStore()

  return (
    <>
      <div className={styles.burger} onClick={open}>
        <div className={styles.cutlet} />
        <div className={styles.cutlet} />
        <div className={styles.cutlet} />
      </div>
      <div className={styles.drawerWrapper(isOpen)}>{props.drawer}</div>
    </>
  )
}
