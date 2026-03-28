import type { FC, PropsWithChildren } from 'react'
import { Inter_Tight, Playfair_Display } from 'next/font/google'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { DefaultLayout } from '@/shared/layouts'
import '../globals.css'

export const revalidate = 300
export const dynamicParams = true

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
})

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  style: ['italic', 'normal'],
})

interface RootLayoutProps extends PropsWithChildren {
  params: Promise<{ locale: string }>
}

const RootLayout: FC<RootLayoutProps> = async props => {
  const { locale } = await props.params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={`${interTight.variable} ${playfairDisplay.variable}`}>
        <NextIntlClientProvider>
          <DefaultLayout>{props.children}</DefaultLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
