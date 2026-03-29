import { getTranslations } from 'next-intl/server'
import { Heading, Paragraph } from '@/shared/components'

export const Section3 = async () => {
  const t = await getTranslations('termsPage')

  return (
    <>
      <Heading text={t('sectionTitle-3')} />
      <Paragraph text={t('sectionIntro-3')} />
      <ul>
        <li>
          <Paragraph text={t('sectionList-3.item1')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-3.item2')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-3.item3')} />
        </li>
      </ul>

      <Paragraph text={t('sectionIntro-3-1')} />
      <ul>
        <li>
          <Paragraph text={t('sectionList-3-1.item1')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-3-1.item2')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-3-1.item3')} />
        </li>
      </ul>
    </>
  )
}
