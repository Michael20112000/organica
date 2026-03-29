import { getTranslations } from 'next-intl/server'
import { Heading, Paragraph } from '@/shared/components'

export const Section5 = async () => {
  const t = await getTranslations('termsPage')

  return (
    <>
      <Heading text={t('sectionTitle-5')} />
      <Paragraph text={t('sectionIntro-5')} />
    </>
  )
}
