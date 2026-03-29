import { getTranslations } from 'next-intl/server'
import { Heading, Paragraph } from '@/shared/components'

export const Section6 = async () => {
  const t = await getTranslations('termsPage')

  return (
    <>
      <Heading text={t('sectionTitle-6')} />
      <Paragraph text={t('sectionIntro-6')} />
      <ul>
        <li>
          <Paragraph text={t('sectionList-6.item1')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-6.item2')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-6.item3')} />
        </li>
      </ul>
      <Paragraph text={t('sectionIntro-6-1')} />
    </>
  )
}
