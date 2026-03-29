import { getTranslations } from 'next-intl/server'
import { Heading, RichText, Paragraph } from '@/shared/components'

export const PageHeading = async () => {
  const t = await getTranslations('termsPage')

  return (
    <>
      <Heading
        text={<RichText tKey='termsPage.title' />}
        size='extra-large'
        Tag='h1'
      />
      <Paragraph text={t('about1')} />
      <Paragraph text={t('about2')} />
    </>
  )
}
