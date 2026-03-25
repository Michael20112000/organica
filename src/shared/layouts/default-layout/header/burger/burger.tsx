'use client'

import { styles } from './styles'

export const Burger = () => {
  return (
    <div className={styles.burger}>
      <div className={styles.cutlet} />
      <div className={styles.cutlet} />
      <div className={styles.cutlet} />
    </div>
  )
}
