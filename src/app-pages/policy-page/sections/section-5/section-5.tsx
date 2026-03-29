import { getTranslations } from 'next-intl/server'
import { Heading, Paragraph, RichText } from '@/shared/components'

export const Section5 = async () => {
  const t = await getTranslations('policyPage')

  return (
    <>
      <Heading text={t('sectionTitle-5')} />
      <Paragraph text={<RichText tKey='policyPage.sectionIntro-5' />} />

      <Heading text={t('sectionTitle-5-1')} />
      <Paragraph text={t('sectionIntro-5-1')} />
      <ul>
        <li>
          <Paragraph text={t('sectionList-5-1.item1')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-5-1.item2')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-5-1.item3')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-5-1.item4')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-5-1.item5')} />
        </li>
      </ul>

      <Heading text={t('sectionTitle-5-2')} />
      <Paragraph text={t('sectionIntro-5-2')} />

      <Heading text={t('sectionTitle-5-3')} />
      <Paragraph text={t('sectionIntro-5-3')} />
      <ul>
        <li>
          <Paragraph text={t('sectionList-5-3.item1')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-5-3.item2')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-5-3.item3')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-5-3.item4')} />
        </li>
      </ul>

      <Heading text={t('sectionTitle-5-4')} />
      <Paragraph text={t('sectionIntro-5-4')} />
      <ul>
        <li>
          <Paragraph text={t('sectionList-5-4.item1')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-5-4.item2')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-5-4.item3')} />
        </li>
        <li>
          <Paragraph text={t('sectionList-5-4.item4')} />
        </li>
      </ul>

      <Heading text={t('sectionTitle-5-5')} />
      <Paragraph text={t('sectionIntro-5-5')} />

      <Heading text={t('sectionTitle-5-6')} />
      <Paragraph text={t('sectionIntro-5-6')} />

      <Heading text={t('sectionTitle-5-7')} />
      <Paragraph text={t('sectionIntro-5-7')} />

      <Heading text={t('sectionTitle-5-8')} />
      <Paragraph text={t('sectionIntro-5-8')} />
      <ul>
        <li>
          <Paragraph
            text={<RichText tKey='policyPage.sectionList-5-8.item1' />}
          />
        </li>
        <li>
          <Paragraph
            text={<RichText tKey='policyPage.sectionList-5-8.item2' />}
          />
        </li>
        <li>
          <Paragraph text={t('sectionList-5-8.item3')} />
        </li>
      </ul>
      <Paragraph text={<RichText tKey='policyPage.section1-5-8' />} />
      <Paragraph text={t('section2-5-8')} />
      <Paragraph text={<RichText tKey='policyPage.section3-5-8' />} />
      <Paragraph text={<RichText tKey='policyPage.section4-5-8' />} />
      <Paragraph text={<RichText tKey='policyPage.section5-5-8' />} />
      <Paragraph text={t('sectionClose-5-8')} />
    </>
  )
}
