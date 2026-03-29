import { getTranslations } from 'next-intl/server'
import { Heading, Paragraph } from '@/shared/components'

export const Section2 = async () => {
  const t = await getTranslations('policyPage')

  return (
    <>
      <Heading text={t('sectionTitle-2')} />
      <Paragraph text={t('sectionIntro-2')} />
      <ul>
        <li>
          <Paragraph text={t('sectionList-2.item1')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-2.item2')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-2.item3')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-2.item4')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-2.item5')} />
        </li>
      </ul>
    </>
  )
}
