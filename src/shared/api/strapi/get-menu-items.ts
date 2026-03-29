import { fetchServer } from '@/shared/api/fetch-server'
import type { MenuItems } from '@/shared/types'

export const getMenuItems = async () => {
  return fetchServer<MenuItems>(
    `/menu-items?populate=*&pagination[pageSize]=1000`,
  )
}
