import { getTranslations } from 'next-intl/server'
import { Heading, Paragraph, RichText } from '@/shared/components'

export const Section9 = async () => {
  const t = await getTranslations('termsPage')

  return (
    <>
      <Heading text={t('sectionTitle-9')} />
      <Paragraph text={t('sectionIntro-9')} />
      <ul>
        <li>
          <Paragraph text={<RichText tKey='termsPage.sectionList-9.item1' />} />
        </li>
        <li>
          <Paragraph text={<RichText tKey='termsPage.sectionList-9.item2' />} />
        </li>
        <li>
          <Paragraph text={<RichText tKey='termsPage.sectionList-9.item3' />} />
        </li>
      </ul>
    </>
  )
}
