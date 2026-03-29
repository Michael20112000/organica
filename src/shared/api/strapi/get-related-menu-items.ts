import { getLocale } from 'next-intl/server'
import { fetchServer } from '@/shared/api/fetch-server'
import type { MenuItems } from '@/shared/types'

export const getRelatedMenuItems = async (
  currentDishId: string,
  category?: string,
) => {
  if (!category) return null

  const locale = await getLocale()

  const url =
    `/menu-items?` +
    `filters[documentId][$ne]=${currentDishId}` +
    `&filters[menu_item_type][name][$eq]=${category}` +
    `&pagination[limit]=3` +
    `&populate[primaryImage]=true` +
    `&locale=${locale}`

  return fetchServer<MenuItems>(url)
}
