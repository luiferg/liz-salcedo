'use client'
import { usePathname } from 'next-intl/client'
import Link from 'next-intl/link'

const LanguageSwitcher = () => {
  const pathname = usePathname()

  return (
    <div className='flex justify-between gap-3 font-primary font-semibold font-lg text-blue-400'>
      <Link href={pathname} locale='es'>
        ES
      </Link>
      |
      <Link href={pathname} locale='en'>
        EN
      </Link>
    </div>
  )
}

export default LanguageSwitcher
