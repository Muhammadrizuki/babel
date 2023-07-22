import React from 'react'
import { useTranslation } from 'react-i18next';

const Info = () => {

    const [t, i18n] = useTranslation('global');      

  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-5 gap-4 px-4 md:px-10 py-16'>
        <div className='lg:col-span-3 flex flex-col justify-evenly'>
            <div>
                <h2>{t('info.header')}</h2>
                <p className='text-justify'>
                    {t('info.body')}
                </p>
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-center items-center'>
            <div className='p-10'>
                <iframe 
                src="https://www.youtube.com/embed/wKRL7vkWMoc"
                allow="autoplay; encrypted-media"
                allowFullScreen
                ></iframe>
            </div>
        </div>
    </div>
  )
}

export default Info