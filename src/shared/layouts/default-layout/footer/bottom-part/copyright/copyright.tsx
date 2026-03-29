import { Link } from '@/i18n/navigation'
import { getNavigation } from '@/shared/hooks'
import { styles } from './styles'

export const Copyright = async () => {
  const {
    navigationObject: { terms, policy },
  } = await getNavigation()

  return (
    <div className={styles.copyright}>
      {new Date().getFullYear()} © Organica
      <Link href={terms.href} target='_blank'>
        {terms.text}
      </Link>
      <Link href={policy.href} target='_blank'>
        {policy.text}
      </Link>
    </div>
  )
}
