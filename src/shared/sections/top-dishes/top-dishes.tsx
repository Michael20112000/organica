import type { FC } from 'react'
import { getTranslations } from 'next-intl/server'
import { DefaultButton } from '@/shared/components'
import { getNavigation } from '@/shared/hooks'
import type { MenuPearl } from '@/shared/types'
import { Dishes } from './dishes'
import { MainDish } from './main-dish'
import { getStyles } from './styles'

interface TopDishesProps {
  menuPearls: MenuPearl['data']
  styling?: Partial<ReturnType<typeof getStyles>>
}

export const TopDishes: FC<TopDishesProps> = async props => {
  const [t, { navigationObject }] = await Promise.all([
    getTranslations('home.menu'),
    getNavigation(),
  ])

  const styles = getStyles(props.styling)

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <Dishes
          first={{
            imageUrl: props.menuPearls.breakfast.url,
            text: t('breakfasts'),
            href: 'https://menu.organica.com.ua/menu/section:snidanki',
          }}
          second={{
            imageUrl: props.menuPearls.dinner.url,
            text: t('dinner'),
            href: 'https://menu.organica.com.ua/menu/section:osnovni-stravi/korisni-supi',
          }}
        />
        <MainDish imageUrl={props.menuPearls.mainPhoto.url} />
        <Dishes
          first={{
            imageUrl: props.menuPearls.chefDish.url,
            text: t('chef'),
            href: 'https://menu.organica.com.ua/menu/section:osnovni-stravi/garyachi-stravi',
          }}
          second={{
            imageUrl: props.menuPearls.dessert.url,
            text: t('desserts'),
            href: 'https://menu.organica.com.ua/menu/section:deserti/deserti',
          }}
        />
        <div className={styles.mobileBottomPart}>
          <p className={styles.mobileBottomText}>{t('content')}</p>
          <DefaultButton
            href={navigationObject.menu.href}
            text={t('btnLabel')}
          />
        </div>
      </div>
    </section>
  )
}
