'use client'

import { Close } from '@/shared/assets/svg'
import { useDrawerStore } from '@/shared/store/drawer-store'

export const CloseButton = () => {
  const { close } = useDrawerStore()

  return (
    <button
      className='ml-auto cursor-pointer'
      onClick={close}
      aria-label='Close menu'
    >
      <Close />
    </button>
  )
}
