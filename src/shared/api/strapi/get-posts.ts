import { fetchServer } from '@/shared/api/fetch-server'
import type { Posts } from '@/shared/types'

export const getPosts = () => {
  return fetchServer<Posts>(
    '/posts?populate[localizations]=true&pagination[pageSize]=1000',
  )
}
