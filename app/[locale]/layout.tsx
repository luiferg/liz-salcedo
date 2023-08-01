import './globals.css'
import { NextIntlClientProvider, createTranslator } from 'next-intl'
import { notFound } from 'next/navigation'
import Head from 'next/head'
import { Footer, Navbar } from '@/components'
export function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }]
}
export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../messages/${locale}.json`)).default
  const t = createTranslator({ locale, messages })
  return {
    title: t('LocaleLayout.title'),
    description: t('LocaleLayout.description'),
  }
}
export default async function LocaleLayout({ children, params: { locale } }) {
  let messages
  let metadata
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
    metadata = await generateMetadata({ params: { locale } })
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <Head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
      </Head>
      <body className='overflow-x-hidden'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
