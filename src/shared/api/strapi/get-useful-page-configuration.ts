import { fetchServer } from '@/shared/api/fetch-server'
import type { UsefulPageConfiguration } from '@/shared/types'

export const getUsefulPageConfiguration = () => {
  return fetchServer<UsefulPageConfiguration>(`/useful-page-configuration`)
}
