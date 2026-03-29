import type { Locale } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { fetchServer } from '@/shared/api/fetch-server'
import type { Posts } from '@/shared/types'

export const getPostsByCategory = async (
  limit: string | number = 3,
  page: string | number = 1,
  category?: string,
  locale?: Locale,
) => {
  const resolvedLocale = locale ?? (await getLocale())

  let url = `/posts?populate=*&pagination[page]=${page}&pagination[pageSize]=${limit}&sort[Date]=desc&locale=${resolvedLocale}`

  if (category) {
    url += `&filters[post_categories][slug][$startsWith]=${category}`
  }

  return fetchServer<Posts>(url)
}
