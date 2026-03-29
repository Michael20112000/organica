import { getTranslations } from 'next-intl/server'
import { Heading, Paragraph, RichText } from '@/shared/components'

export const Section2 = async () => {
  const t = await getTranslations('termsPage')

  return (
    <>
      <Heading text={t('sectionTitle-2')} />
      <Paragraph text={t('sectionIntro-2')} />
      <Paragraph text={<RichText tKey='termsPage.sectionIntro-2-1' />} />
      <ul>
        <li>
          <Paragraph text={t('sectionList-2.item1')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-2.item2')} />
        </li>
      </ul>
    </>
  )
}
