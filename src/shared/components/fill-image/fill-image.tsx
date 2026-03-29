import type { FC } from 'react'
import Image, { type ImageProps } from 'next/image'
import { styles } from './styles'

interface FillImageProps extends Omit<ImageProps, 'alt'> {
  alt?: string
}

export const FillImage: FC<FillImageProps> = props => {
  const { className, alt, ...rest } = props

  return (
    <div className={styles.fillImage(className)}>
      <Image fill {...rest} alt={alt || 'No alt provided'} />
    </div>
  )
}
