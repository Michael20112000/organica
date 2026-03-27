import type { FC, ComponentProps } from 'react'

export const Caret: FC<ComponentProps<'svg'>> = props => {
  const { width = 12, height = 12, ...rest } = props

  return (
    <svg width={width} height={height} viewBox='0 0 10 10' {...rest}>
      <path
        d='M0.747136 3.66402C0.665677 3.74548 0.625052 3.85194 0.625052 3.95861C0.625052 4.06527 0.665677 4.17173 0.747136 4.25319L4.70547 8.21152C4.86818 8.37423 5.13193 8.37423 5.29464 8.21152L9.25297 4.25319C9.41568 4.09048 9.41568 3.82673 9.25297 3.66402C9.09026 3.50132 8.82651 3.50132 8.6638 3.66402L5.00005 7.32777L1.3363 3.66402C1.17359 3.50132 0.909844 3.50132 0.747136 3.66402Z'
        fill='currentColor'
      />
    </svg>
  )
}
