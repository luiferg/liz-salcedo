'use client'
import Link from 'next-intl/link'

const LanguageSwitcher = () => {
  return (
    <div className='flex justify-between gap-3 font-primary font-semibold font-lg text-blue-400'>
      <Link href='/' locale='es'>
        ES
      </Link>
      |
      <Link href='/' locale='en'>
        EN
      </Link>
    </div>
  )
}

export default LanguageSwitcher
