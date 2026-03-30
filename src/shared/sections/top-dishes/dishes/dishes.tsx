import type { FC } from 'react'
import { FillImage } from '@/shared/components'
import { styles } from './styles'

interface DishesProps {
  first: {
    imageUrl: string
    text: string
    href: string
  }
  second: {
    imageUrl: string
    text: string
    href: string
  }
}

export const Dishes: FC<DishesProps> = props => {
  return (
    <div className={styles.dishes}>
      <div>
        <FillImage
          className={styles.imageWrapper}
          src={props.first.imageUrl}
          alt='Breakfast'
        />
        <a className={styles.link} href={props.first.href} target='_blank'>
          {props.first.text}
        </a>
      </div>
      <div>
        <FillImage
          className={styles.imageWrapper}
          src={props.second.imageUrl}
          alt='Dinner'
        />
        <a className={styles.link} href={props.second.href} target='_blank'>
          {props.second.text}
        </a>
      </div>
    </div>
  )
}
