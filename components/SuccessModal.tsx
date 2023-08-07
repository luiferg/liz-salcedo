'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

type SuccessModalProps = {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const SuccessModal = ({ showModal, setShowModal }: SuccessModalProps) => {
  const t = useTranslations('ContactModal')

  return (
    <AnimatePresence>
      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center font-primary'>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className='bg-white rounded-lg p-6 shadow-lg text-center flex flex-col gap-4 justify-center items-center text-black'
          >
            <h2 className='text-2xl font-bold text-blue-400'>{t('success')}</h2>
            <p>{t('message')}</p>
            <button
              onClick={() => setShowModal(false)}
              className='bg-pink py-2 px-5 lg:px-7 w-fit rounded-xl font-semibold text-white hover:scale-110 active:scale-100 transition-all duration-300'
            >
              Ok
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default SuccessModal
