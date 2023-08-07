'use client'
import { useTranslations } from 'next-intl'
import { BsSend } from 'react-icons/bs'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SuccessModal } from '.'

const ContactForm = () => {
  const t = useTranslations('ContactForm')
  const form = useRef<HTMLFormElement | null>(null)
  const [showModal, setShowModal] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID ?? '',
          process.env.NEXT_PUBLIC_TEMPLATE_ID ?? '',
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY ?? ''
        )
        .then(
          () => {
            setShowModal(true)
            form.current?.reset()
          },
          (error) => {
            console.log(error.text)
          }
        )
    }
  }
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className='flex flex-col gap-4 font-primary text-sm md:text-lg'
    >
      <h1 className='text-lg lg:text-xl 2xl:text-2xl font-semibold text-white'>
        {t('say-hi')}
      </h1>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <input
            type='text'
            minLength={3}
            maxLength={100}
            placeholder={t('name')}
            id='name'
            name='name'
            required
            className='p-2 lg:p-3 rounded-xl bg-white focus:bg-opacity-10 focus:outline-[0.5px] focus:placeholder:invisible focus:outline-white transition-all duration-300 focus:text-white text-black w-[50%]'
          />
          <input
            minLength={5}
            maxLength={150}
            type='email'
            placeholder={t('email')}
            id='email'
            name='email'
            required
            className='p-2 lg:p-3 rounded-xl bg-white focus:bg-opacity-10 focus:outline-[0.5px] focus:placeholder:invisible focus:outline-white transition-all duration-300 focus:text-white text-black w-[50%]'
          />
        </div>
        <input
          type='text'
          placeholder={t('subject')}
          id='subject'
          name='subject'
          className='w-full p-2 lg:p-3 rounded-xl bg-white focus:bg-opacity-10 focus:outline-[0.5px] focus:placeholder:invisible focus:outline-white transition-all duration-300 focus:text-white text-black'
        />
        <textarea
          rows={5}
          minLength={10}
          maxLength={500}
          placeholder={t('message')}
          id='message'
          name='message'
          className='resize-none w-full p-2 lg:p-3 rounded-xl bg-white focus:bg-opacity-10 focus:outline-[0.5px] focus:placeholder:invisible focus:outline-white transition-all duration-300 focus:text-white text-black'
        />
        <div className='flex flex-row gap-1 lg:gap-2 justify-start items-center'>
          <input type='checkbox' required className='w-4 h-4' />
          <label className='text-white'>{t('agreetment')}</label>
        </div>
        <div>
          <button
            type='submit'
            className='bg-pink p-2 lg:p-3 w-fit rounded-xl font-semibold text-white flex items-center gap-1 hover:scale-110 active:scale-100 transition-all duration-300'
          >
            {t('submit')}
            <BsSend />
          </button>
        </div>
      </div>
      <SuccessModal showModal={showModal} setShowModal={setShowModal} />
    </form>
  )
}

export default ContactForm
