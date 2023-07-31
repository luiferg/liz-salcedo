'use client'
import { useRouter, usePathname } from 'next-intl/client'

const LanguageSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className='flex justify-between gap-3 font-primary font-semibold font-lg text-blue-400'>
      <button
        onClick={() => {
          router.push(pathname, { locale: 'es' })
        }}
      >
        ES
      </button>
      |
      <button
        onClick={() => {
          router.push(pathname, { locale: 'en' })
        }}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageSwitcher
