'use client'

import { type ReactNode, type FC, useLayoutEffect } from 'react'
import { useDrawerStore } from '@/shared/store/drawer-store'
import { styles } from './styles'

interface BurgerProps {
  drawer: ReactNode
}

export const Burger: FC<BurgerProps> = props => {
  const { isOpen, open, close } = useDrawerStore()

  useLayoutEffect(() => {
    document.body.classList.toggle('scroll-lock', isOpen)
  }, [isOpen])

  useLayoutEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') close()
    })
  }, [close])

  return (
    <>
      <div className={styles.burger} onClick={open}>
        <div className={styles.cutlet} />
        <div className={styles.cutlet} />
        <div className={styles.cutlet} />
      </div>
      <div className={styles.eclipse(isOpen)}></div>
      <div className={styles.drawerWrapper(isOpen)}>{props.drawer}</div>
    </>
  )
}
