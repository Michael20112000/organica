import { getTranslations } from 'next-intl/server'
import { Heading, Paragraph } from '@/shared/components'

export const Section7 = async () => {
  const t = await getTranslations('termsPage')

  return (
    <>
      <Heading text={t('sectionTitle-7')} />
      <Paragraph text={t('sectionIntro-7')} />
    </>
  )
}
