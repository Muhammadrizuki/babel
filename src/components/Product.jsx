import React from 'react'
import pro1 from '../assets/pro1.jpg'
import pro2 from '../assets/pro2.jpg'
import pro3 from '../assets/pro3.jpg'
import { useTranslation } from 'react-i18next'

const Product = () => {

    const [t, i18n] = useTranslation('global');      

  return (
    <div className='max-w-[900px] mx-auto py-16 px-4 text-center'>
        <h1>{t('product.header')}</h1>
        <p>{t('product.body')}</p>
        <div className='grid grid-rows-none grid-cols-2 md:grid-cols-4 py-5 gap-2 md:gap-4'>
            <div className='relative aspect-w-1 aspect-h-1'>
                <img src={pro1} alt='/' className='object-cover'/>
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                    <p className='left-4 bottom-4 text-xl font-bold text-white absolute'>Product 1</p>
                </div>
            </div>
            <div className='relative aspect-w-1 aspect-h-1'>
                <img src={pro2} alt='/'/>
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                    <p className='left-4 bottom-4 text-xl font-bold text-white absolute'>Product 2</p>
                </div>
            </div>
            <div className='relative aspect-w-1 aspect-h-1'>
                <img src={pro3} alt='/'/>
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                    <p className='left-4 bottom-4 text-xl font-bold text-white absolute'>Product 3</p>
                </div>
            </div>
            <div className='relative aspect-w-1 aspect-h-1'>
                <img src={pro3} alt='/'/>
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                    <p className='left-4 bottom-4 text-xl font-bold text-white absolute'>Product 4</p>
                </div>
            </div>
        
        </div>

    </div>
  )
}

export default Product