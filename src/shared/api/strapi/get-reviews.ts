import { fetchServer } from '@/shared/api/fetch-server'
import type { Reviews } from '@/shared/types'

export const getReviews = () => {
  return fetchServer<Reviews>(`/reviews`)
}
