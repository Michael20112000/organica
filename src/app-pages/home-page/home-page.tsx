import { getSwiper } from '@/shared/api'
import { Hero } from '@/shared/sections'

export const HomePage = async () => {
  const [swiper] = await Promise.all([getSwiper()])

  return (
    <>
      <Hero slides={swiper.data.slide} />
    </>
  )
}
