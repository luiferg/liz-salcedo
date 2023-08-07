'use client'
import { ContactForm, InteractiveLogo, PageWrapper } from '@/components'
import { motion } from 'framer-motion'

const page = () => {
  return (
    <PageWrapper>
      <div className='flex flex-col-reverse lg:flex-row lg:pl-[6vw] lg:h-screen lg:w-screen'>
        <div className='lg:w-[50%] w-full bg-blue-400 flex flex-col justify-center items-center p-10 sm:px-16 lg:px-0 lg:py-2'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className='w-full lg:w-[60%] 2xl:w-[65%]'
          >
            <ContactForm />
          </motion.div>
        </div>
        <div className='lg:w-[50%] bg-[#f4eeed] p-8 lg:p-2 h-[30vh] sm:h-[40vh] lg:h-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className='flex justify-center items-center h-full w-full'
          >
            <InteractiveLogo />
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default page
