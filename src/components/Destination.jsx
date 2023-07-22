import React from 'react'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import pic5 from '../assets/pic5.jpg'
import { useTranslation } from 'react-i18next'

const Destination = () => {

    const [t, i18n] = useTranslation('global');      

  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>{t('destination.header')}</h1>
        <p>{t('destination.body')}</p>
        <div className='w-full grid grid-rows-none md:grid-cols-5 py-5 gap-2 md:gap-4'>
        <div className='relative'>
            <img src={pic1} alt='/'/>
            <div className='bg-gray-900/50 absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300'>
                <p className='left-4 bottom-4 text-xl font-bold text-white absolute'>TAHURA</p>
            </div>
        </div>
        <div className='relative'>
            <img src={pic2} alt='/'/>
            <div className='bg-gray-900/50 absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300'>
                <p className='left-4 bottom-4 text-xl font-bold text-white absolute'>NEBERAN</p>
            </div>
        </div>
        <div className='relative'>
            <img src={pic3} alt='/'/>
            <div className='bg-gray-900/50 absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300'>
                <p className='left-4 bottom-4 text-xl font-bold text-white absolute'>MARRA</p>
            </div>
        </div>
        <div className='relative'>
            <img src={pic4} alt='/'/>
            <div className='bg-gray-900/50 absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300'>
                <p className='left-4 bottom-4 text-xl font-bold text-white absolute'>JEMBATAN JODOH</p>
            </div>
        </div>
        <div className='relative'>
            <img src={pic5} alt='/'/>
            <div className='bg-gray-900/50 absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300'>
                <p className='left-4 bottom-4 text-xl font-bold text-white absolute'>AIR TERJUN KEMBAR</p>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Destination