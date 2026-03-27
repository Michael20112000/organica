import type { FC } from 'react'
import Image, { type ImageProps } from 'next/image'
import { styles } from './styles'

export const FillImage: FC<ImageProps> = props => {
  const { className, alt, ...rest } = props

  return (
    <div className={styles.fillImage(className)}>
      <Image fill {...rest} alt={alt || 'No alt provided'} />
    </div>
  )
}
