import { fetchServer } from '@/shared/api/fetch-server'
import type { MenuPearl } from '@/shared/types'

export const getMenuPearls = () => {
  return fetchServer<MenuPearl>(`/menu-pearl?populate=*`)
}
