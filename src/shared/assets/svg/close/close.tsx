import type { FC, ComponentProps } from 'react'

export const Close: FC<ComponentProps<'svg'>> = props => {
  const { width = 22, height = 22, ...rest } = props

  return (
    <svg width={width} height={height} viewBox='0 0 22 22' {...rest}>
      <path
        d='M0.844741 0L0 0.844741L10.1553 11L0 21.1553L0.844741 22L11 11.8447L21.1553 22L22 21.1553L11.8447 11L22 0.844741L21.1553 0L11 10.1553L0.844741 0Z'
        fill='currentColor'
      />
    </svg>
  )
}
