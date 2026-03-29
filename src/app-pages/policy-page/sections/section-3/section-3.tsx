import { getTranslations } from 'next-intl/server'
import { Heading, Paragraph, RichText } from '@/shared/components'

export const Section3 = async () => {
  const t = await getTranslations('policyPage')

  return (
    <>
      <Heading text={t('sectionTitle-3')} />
      <Paragraph text={t('sectionIntro-3')} />

      <Heading text={t('sectionTitle-3-1')} />
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
      <Paragraph text={t('sectionClose-3-1')} />

      <Heading text={t('sectionTitle-3-2')} />
      <Paragraph text={t('sectionIntro-3-2')} />
      <ul>
        <li>
          <Paragraph text={t('sectionList-3-2.item1')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-3-2.item2')} />
        </li>
      </ul>
      <Paragraph text={t('sectionClose-3-2')} />

      <Heading text={t('sectionTitle-3-3')} />
      <Paragraph text={t('sectionIntro-3-3')} />
      <ul>
        <li>
          <Paragraph
            text={<RichText tKey='policyPage.sectionList-3-3.item1' />}
          />
        </li>
        <li>
          <Paragraph
            text={<RichText tKey='policyPage.sectionList-3-3.item2' />}
          />
        </li>
        <li>
          <Paragraph
            text={<RichText tKey='policyPage.sectionList-3-3.item3' />}
          />
        </li>
        <li>
          <Paragraph
            text={<RichText tKey='policyPage.sectionList-3-3.item4' />}
          />
        </li>
        <li>
          <Paragraph
            text={<RichText tKey='policyPage.sectionList-3-3.item5' />}
          />
        </li>
        <li>
          <Paragraph
            text={<RichText tKey='policyPage.sectionList-3-3.item6' />}
          />
        </li>
      </ul>

      <Heading text={t('sectionTitle-3-4')} />
      <Paragraph text={t('sectionIntro-3-4')} />
      <ul>
        <li>
          <Paragraph text={t('sectionList-3-4.item1')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-3-4.item2')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-3-4.item3')} />
        </li>
      </ul>
    </>
  )
}
