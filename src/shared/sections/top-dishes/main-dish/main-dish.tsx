import type { FC } from 'react'
import { getTranslations } from 'next-intl/server'
import { Leaf } from '@/shared/assets/svg'
import {
  Heading,
  RichText,
  FillImage,
  DefaultButton,
} from '@/shared/components'
import { styles } from './styles'

interface MainDishProps {
  imageUrl: string
}

export const MainDish: FC<MainDishProps> = async props => {
  const t = await getTranslations('home.menu')

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
          href='https://menu.organica.com.ua'
          text={t('btnLabel')}
        />
      </div>
    </div>
  )
}
