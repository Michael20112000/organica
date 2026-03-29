import type { paths } from './auto-generated-strapi-types'

interface Meta {
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export type Swiper =
  paths['/swiper']['get']['responses']['200']['content']['application/json']

export type MenuPearl =
  paths['/menu-pearl']['get']['responses']['200']['content']['application/json']

export type Promotions =
  paths['/promotions']['get']['responses']['200']['content']['application/json']

export type PostCategories =
  paths['/post-categories']['get']['responses']['200']['content']['application/json']

export type Posts =
  paths['/posts']['get']['responses']['200']['content']['application/json'] &
    Meta

export type MenuItems =
  paths['/menu-items']['get']['responses']['200']['content']['application/json'] &
    Meta

export type UsefulPageConfiguration =
  paths['/useful-page-configuration']['get']['responses']['200']['content']['application/json']

export type Reviews =
  paths['/reviews']['get']['responses']['200']['content']['application/json'] &
    Meta
