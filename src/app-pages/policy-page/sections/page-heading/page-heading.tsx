import { Heading, RichText, Paragraph } from '@/shared/components'

export const PageHeading = () => {
  return (
    <>
      <Heading
        text={<RichText tKey='policyPage.title' />}
        size='extra-large'
        Tag='h1'
      />
      <Paragraph text={<RichText tKey='policyPage.about' />} />
    </>
  )
}
