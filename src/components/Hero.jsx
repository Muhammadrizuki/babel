import React from 'react'
import video from '../assets/video.mp4'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-full object-cover' autoPlay loop muted src={video}/>
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
        <div className='absolute top-0 h-full w-full flex flex-col justify-center text-center items-center text-white p-4'>
            <h1>{t('hero.header')}</h1>
            <h2>{t('hero.body')}</h2>
        </div>
    </div>
  )
}

export default Hero