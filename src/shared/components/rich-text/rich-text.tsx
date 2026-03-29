'use client'

import type { FC } from 'react'
import { useTranslations } from 'next-intl'

interface IRichTextProps {
  tKey: string
}

export const RichText: FC<IRichTextProps> = props => {
  const t = useTranslations()

  // @ts-expect-error this is acceptable here
  return t.rich(props.tKey, {
    // === text modifications ===
    italic: chunk => <i>{chunk}</i>,
    b: chunk => <b>{chunk}</b>,
    // === breaks ===
    br: () => <br />,
    brXs: () => <br className='xs:hidden block' />,
    brMd: () => <br className='hidden md:block' />,
    brLg: () => <br className='hidden lg:block' />,
    brXl: () => <br className='hidden xl:block' />,
    br2xl: () => <br className='hidden 2xl:block' />,
    brXsToMd: () => <br className='block md:hidden' />,
    brXsToLg: () => <br className='block lg:hidden' />,
    brXsToXl: () => <br className='block xl:hidden' />,
    brXsTo2xl: () => <br className='block 2xl:hidden' />,
    brMdToLg: () => <br className='hidden md:block lg:hidden' />,
    brMdToXl: () => <br className='hidden md:block xl:hidden' />,
    brMdTo2xl: () => <br className='hidden md:block 2xl:hidden' />,
    brLgToXl: () => <br className='hidden lg:block xl:hidden' />,
    brLgTo2xl: () => <br className='hidden lg:block 2xl:hidden' />,
    brXlTo2xl: () => <br className='hidden xl:block 2xl:hidden' />,
  })
}
