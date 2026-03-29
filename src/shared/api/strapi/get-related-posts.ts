import { getLocale } from 'next-intl/server'
import { fetchServer } from '@/shared/api/fetch-server'
import type { Posts, PostCategories } from '@/shared/types'

export const getRelatedPosts = async (
  slug: string,
  categories: PostCategories['data'] | undefined,
) => {
  if (!categories) return []

  const locale = await getLocale()

  const categoryNames = categories.map(category => category.name)

  const baseUrl =
    `/posts?populate=*` +
    `&sort[Date]=desc` +
    `&filters[slug][$ne]=${slug}` +
    `&locale=${locale}`

  const relatedFilter = categoryNames.length
    ? `&filters[post_categories][name][$in]=${categoryNames.join(',')}`
    : ''

  const otherFilter = categoryNames.length
    ? `&filters[post_categories][name][$notIn]=${categoryNames.join(',')}`
    : ''

  const related = await fetchServer<Posts>(baseUrl + relatedFilter)
  const other = await fetchServer<Posts>(baseUrl + otherFilter)

  return [...related.data, ...other.data]
}
