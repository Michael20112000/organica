import { getTranslations } from 'next-intl/server'
import { Heading, Paragraph, RichText } from '@/shared/components'

export const Section4 = async () => {
  const t = await getTranslations('policyPage')

  return (
    <>
      <Heading text={t('sectionTitle-4')} />
      <Paragraph text={t('sectionIntro-4')} />

      <Heading text={t('sectionTitle-4-1')} />
      <Paragraph text={t('sectionIntro-4-1')} />
      <ul>
        <li>
          <Paragraph
            text={<RichText tKey='policyPage.sectionList-4-1.item1' />}
          />
        </li>
        <li>
          <Paragraph
            text={<RichText tKey='policyPage.sectionList-4-1.item2' />}
          />
        </li>
        <li>
          <Paragraph
            text={<RichText tKey='policyPage.sectionList-4-1.item3' />}
          />
        </li>
        <li>
          <Paragraph
            text={<RichText tKey='policyPage.sectionList-4-1.item4' />}
          />
        </li>
      </ul>
      <Paragraph text={t('sectionClose-4-1')} />

      <Heading text={t('sectionTitle-4-2')} />
      <Paragraph text={<RichText tKey='policyPage.sectionIntro-4-2' />} />
      <Paragraph text={t('sectionClose-4-2')} />

      <Heading text={t('sectionTitle-4-3')} />
      <Paragraph text={t('sectionIntro-4-3')} />
      <ul>
        <li>
          <Paragraph text={t('sectionList-4-3.item1')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-4-3.item2')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-4-3.item3')} />
        </li>
      </ul>

      <Heading text={t('sectionTitle-4-4')} />
      <Paragraph text={t('sectionIntro-4-4')} />
    </>
  )
}
