import { getNavigation } from '@/shared/hooks'

export interface NavigationLink {
  href: string
  text: string
}

interface HeaderNavigationLinks {
  firstNavigationPart: NavigationLink[]
  secondNavigationBarPart: NavigationLink[]
}

export const getHeaderNavigationLinks =
  async (): Promise<HeaderNavigationLinks> => {
    const { navigationObject } = await getNavigation()

    return {
      firstNavigationPart: [
        navigationObject.about,
        navigationObject.useful,
        navigationObject.contacts,
      ],
      secondNavigationBarPart: [
        navigationObject.menu,
        navigationObject.delivery,
        navigationObject.reservation,
      ],
    }
  }
