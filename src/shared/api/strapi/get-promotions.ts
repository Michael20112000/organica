import { getLocale } from 'next-intl/server'
import { fetchServer } from '@/shared/api/fetch-server'
import type { Promotions } from '@/shared/types'

export const getPromotions = async () => {
  const locale = await getLocale()

  return fetchServer<Promotions>(
    `/promotions?populate=Img&sort=orderId:desc&locale${locale}`,
  )
}
