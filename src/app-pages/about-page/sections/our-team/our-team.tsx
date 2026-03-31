import { getTranslations } from 'next-intl/server'
import { Heading, FillImage } from '@/shared/components'
import { styles } from './styles'

export const OurTeam = async () => {
  const t = await getTranslations('about.ourTeam')

  return (
    <section className={styles.section}>
      <Heading text={t('title')} className={styles.heading} />
      <div className={styles.grid}>
        <FillImage
          className={styles.image}
          src='/about-page/our-team.jpg'
          alt='Our Team'
          sizes='(min-width: 600px) 100vw, 50vw'
        />
        <FillImage
          className={styles.image}
          src='/about-page/secondary-left.png'
          alt='Our Team'
          sizes='50vw'
        />
        <FillImage
          className={styles.image}
          src='/about-page/secondary-right.png'
          alt='Our Team'
          sizes='50vw'
        />
      </div>
    </section>
  )
}
