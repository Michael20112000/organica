import type { FC } from 'react'
import { getTranslations } from 'next-intl/server'
import {
  FillImage,
  Heading,
  RichText,
  Paragraph,
  DefaultButton,
} from '@/shared/components'
import { getNavigation } from '@/shared/hooks'
import { getStyles } from './styles'

interface WithLoveForNatureProps {
  styling?: Partial<ReturnType<typeof getStyles>>
}

export const WithLoveForNature: FC<WithLoveForNatureProps> = async props => {
  const [t, { navigationObject }] = await Promise.all([
    getTranslations('home.nature'),
    getNavigation(),
  ])

  const styles = getStyles(props.styling)

  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <FillImage
          className={styles.image}
          src='/home-page/nature-section-1.webp'
        />
      </div>
      <div className={styles.content}>
        <Heading text={<RichText tKey='home.nature.title' />} />
        <Paragraph className={styles.text} text={t('content')} />
        <DefaultButton
          variant='dark'
          text={t('btnLabel')}
          href={navigationObject.reservation.href}
        />
      </div>
    </section>
  )
}
