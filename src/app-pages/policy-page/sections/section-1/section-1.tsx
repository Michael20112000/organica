import { getTranslations } from 'next-intl/server'
import { Heading, Paragraph } from '@/shared/components'

export const Section1 = async () => {
  const t = await getTranslations('policyPage')

  return (
    <>
      <Heading text={t('sectionTitle-1')} />
      <Paragraph text={t('sectionIntro-1')} />
      <ul>
        <li>
          <Paragraph text={t('sectionList-1.item1')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-1.item2')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-1.item3')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-1.item4')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-1.item5')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-1.item6')} />
        </li>
      </ul>
    </>
  )
}
