import type { ReactNode, MouseEventHandler, FC } from 'react'
import { Link } from '@/i18n/navigation'
import { Caret } from '@/shared/assets/svg'
import { TextSwapper } from '@/shared/components'
import { styles } from './styles'

interface BaseProps {
  className?: string
  variant?: 'dark' | 'transparent'
  text: string
  icon?: ReactNode
  iconPosition?: 'start'
}

interface LinkProps extends BaseProps {
  href: string
}

interface ButtonProps extends BaseProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}

export type DefaultButtonProps = LinkProps | ButtonProps

export const DefaultButton: FC<DefaultButtonProps> = props => {
  const content = (
    <>
      <TextSwapper text={props.text} />
      {props.icon ?? <Caret className={styles.caret} />}
    </>
  )

  const className = styles.button(
    props.variant,
    props.iconPosition,
    props.className,
  )

  if ('href' in props) {
    return (
      <Link className={className} href={props.href} target='_blank'>
        {content}
      </Link>
    )
  }

  return (
    <button className={className} onClick={props.onClick}>
      {content}
    </button>
  )
}
