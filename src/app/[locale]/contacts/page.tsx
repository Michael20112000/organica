import type { FC } from 'react'
import type { Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { ContactsPage } from '@/app-pages'

interface ContactsProps {
  params: Promise<{ locale: Locale }>
}

const Contacts: FC<ContactsProps> = async props => {
  const { locale } = await props.params
  setRequestLocale(locale)

  return <ContactsPage />
}

export default Contacts
