import type { ReactNode, FC } from 'react'
import type { ImageProps } from 'next/image'
import { FillImage } from '@/shared/components'
import { getStyles } from './styles'

interface BlockWithImageProps {
  content: ReactNode
  image: Omit<ImageProps, 'className'>
  styling?: Partial<ReturnType<typeof getStyles>>
}

export const ContentBlockWithImage: FC<BlockWithImageProps> = props => {
  const styles = getStyles(props.styling)

  return (
    <section className={styles.section}>
      {props.content}
      <FillImage {...props.image} className={styles.image} />
    </section>
  )
}
