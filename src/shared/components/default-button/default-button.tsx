import type { ReactNode, ComponentProps, FC } from 'react'
import { Link } from '@/i18n/navigation'
import { Caret } from '@/shared/assets/svg'
import { TextSwapper } from '@/shared/components'
import { styles } from './styles'

interface BaseProps {
  variant?: 'dark' | 'transparent'
  text: string
  icon?: ReactNode
  iconPosition?: 'start'
}

type SimpleLinkProps = ComponentProps<'a'>
type LinkProps = ComponentProps<typeof Link>
type ButtonProps = ComponentProps<'button'>

export type DefaultButtonProps = BaseProps &
  (SimpleLinkProps | LinkProps | ButtonProps)

export const DefaultButton: FC<DefaultButtonProps> = props => {
  const { text, icon, variant, iconPosition, className, ...rest } = props

  const content = (
    <>
      <TextSwapper text={text} />
      {icon ?? <Caret className={styles.caret} />}
    </>
  )

  const classes = styles.button(variant, iconPosition, className)

  if ('href' in props && typeof props.href === 'string') {
    if (
      props.href.startsWith('http') ||
      props.href.startsWith('mailto:') ||
      props.href.startsWith('tel:') ||
      props.href.startsWith('viber://')
    ) {
      return (
        <a className={classes} {...(rest as SimpleLinkProps)}>
          {content}
        </a>
      )
    }

    return (
      <Link className={className} {...(rest as LinkProps)}>
        {content}
      </Link>
    )
  }

  return (
    <button className={className} {...(rest as ButtonProps)}>
      {content}
    </button>
  )
}
