import { fetchServer } from '@/shared/api/fetch-server'
import type { MenuItems } from '@/shared/types'

export const getMenuItemBySlug = (slug: string) => {
  const url =
    `/menu-items?` +
    `filters[slug][$eq]=${slug}` +
    `&populate[primaryImage]=true` +
    `&populate[secondaryImage]=true` +
    `&populate[allergens][populate][icon]=true` +
    `&populate[reviews]=true` +
    `&populate[menu_item_type]=true` +
    `&populate[localizations]=true` +
    `&locale=*`

  return fetchServer<MenuItems>(url)
}
