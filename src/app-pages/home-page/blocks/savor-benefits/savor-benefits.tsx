import { Heading, RichText, FillImage } from '@/shared/components'
import { Decorations } from './decorations'
import { styles } from './styles'

export const SavorBenefits = () => {
  return (
    <div className={styles.block}>
      <Heading text={<RichText tKey='home.harmony.title' />} />
      <FillImage
        className={styles.image}
        src='/home-page/harmony-section-1.webp'
        alt='Alternative text'
      />
      <Decorations />
      <div className={styles.label}>
        <RichText tKey='home.harmony.sectionLabel' />
      </div>
    </div>
  )
}
