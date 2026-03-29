import { Prose } from '@/shared/components'
import {
  PageHeading,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
} from './sections'

export const PolicyPage = async () => {
  return (
    <Prose>
      <PageHeading />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </Prose>
  )
}
