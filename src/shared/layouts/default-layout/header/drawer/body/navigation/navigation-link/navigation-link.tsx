'use client'

import type { FC } from 'react'
import { Link } from '@/i18n/navigation'
import { Caret } from '@/shared/assets/svg'
import type { NavigationLink as INavigationLink } from '@/shared/hooks'
import { useDrawerStore } from '@/shared/store/drawer-store'
import { styles } from './styles'

export const NavigationLink: FC<INavigationLink> = props => {
  const { close } = useDrawerStore()

  return (
    <Link href={props.href} className={styles.link} onClick={close}>
      {props.text} <Caret width={14} height={14} />
    </Link>
  )
}
