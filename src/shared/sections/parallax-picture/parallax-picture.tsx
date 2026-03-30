import type { FC } from 'react'
import { FillImage } from '@/shared/components'
import { getStyles } from './styles'

interface ParallaxPictureProps {
  src: string
  styling?: Partial<ReturnType<typeof getStyles>>
}

export const ParallaxPicture: FC<ParallaxPictureProps> = props => {
  const styles = getStyles(props.styling)

  return (
    <section className={styles.section}>
      <FillImage className={styles.image} src={props.src} sizes='100vw' />
    </section>
  )
}
