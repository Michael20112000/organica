import type { FC } from 'react'
import { getTranslations } from 'next-intl/server'
import { Leaf } from '@/shared/assets/svg'
import {
  Heading,
  RichText,
  FillImage,
  DefaultButton,
} from '@/shared/components'
import { getNavigation } from '@/shared/hooks'
import { styles } from './styles'

interface MainDishProps {
  imageUrl: string
}

export const MainDish: FC<MainDishProps> = async props => {
  const [t, { navigationObject }] = await Promise.all([
    getTranslations('home.menu'),
    getNavigation(),
  ])

  return (
    <div className={styles.mainDish}>
      <div className={styles.circle}>
        <Leaf />
      </div>
      <Heading
        text={<RichText tKey='home.menu.header' />}
        className={styles.heading}
      />
      <div className={styles.content}>
        <FillImage
          className={styles.image}
          src={props.imageUrl}
          alt='Main photo'
        />
        <p className={styles.text}>{t('content')}</p>
        <DefaultButton
          text={t('btnLabel')}
          href={navigationObject.menu.href}
          aria-label={t('btnLabel')}
          target='_blank'
        />
      </div>
    </div>
  )
}
