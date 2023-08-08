import Link from 'next/link'
import React from 'react'
import { RxArrowRight } from 'react-icons/rx'
import { useTranslations } from 'next-intl'

type ProjectButtonProps = {
  link: string
}

const ProjectButton: React.FC<ProjectButtonProps> = ({ link }) => {
  const t = useTranslations('Button')
  return (
    <Link
      href={link}
      className='group px-2 py-1 lg:px-5 lg:py-3 bg-white font-primary text-sm lg:text-xl rounded-full hover:scale-110 transition-all active:scale-100 duration-300 text-blue-400 font-medium flex flex-row items-center gap-2'
    >
      {t('view')}
      <RxArrowRight className='text-xl group-hover:translate-x-1 transition-all' />
    </Link>
  )
}

export default ProjectButton
