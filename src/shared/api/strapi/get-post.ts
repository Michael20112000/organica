import { fetchServer } from '@/shared/api/fetch-server'
import type { Posts } from '@/shared/types'

export const getPost = (slug: string) => {
  return fetchServer<Posts>(
    `/posts` +
      `?filters[slug][$eq]=${slug}` +
      `&populate[baseImg]=true` +
      `&populate[authorImg]=true` +
      `&populate[Content][populate]=*` +
      `&populate[post_categories][fields]=*` +
      `&populate[localizations]=true` +
      `&locale=*`,
  )
}
