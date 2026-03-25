import type { FC, PropsWithChildren } from 'react'
import { Inter_Tight, Playfair_Display } from 'next/font/google'
import './globals.css'

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
})

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  style: ['italic', 'normal'],
})

const RootLayout: FC<PropsWithChildren> = props => {
  return (
    <html lang='en'>
      <body className={`${interTight.variable} ${playfairDisplay.variable}`}>
        {props.children}
      </body>
    </html>
  )
}

export default RootLayout
