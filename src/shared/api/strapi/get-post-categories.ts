import type { Locale } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { fetchServer } from '@/shared/api/fetch-server'
import type { PostCategories } from '@/shared/types'

export const getPostCategories = async (locale?: Locale) => {
  const resolvedLocale = locale ?? (await getLocale())

  return fetchServer<PostCategories>(
    `/post-categories?filters[posts][id][$notNull]=true&locale=${resolvedLocale}`,
  )
}
