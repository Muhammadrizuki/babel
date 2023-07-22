import React from 'react'
import { useTranslation } from 'react-i18next';

const Pack = () => {

    const [t, i18n] = useTranslation('global');      

  return (
    <div className='mx-auto py-16 px-4 md:px-64 text-center bg-slate-300'>
        <h1>{t('pack.header')}</h1>
        <p>{t('pack.body')}</p>
        <div className='w-full grid grid-rows-none md:grid-cols-3 py-5 gap-2 md:gap-4 items-center'>
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">{t('pack.pack01.header')}</h2>
                <p className="text-gray-600">{t('pack.pack01.body')}</p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">{t('pack.book')}</button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">{t('pack.pack02.header')}</h2>
                <p className="text-gray-600">{t('pack.pack02.body')}</p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">{t('pack.book')}</button>
            </div><div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">{t('pack.pack03.header')}</h2>
                <p className="text-gray-600">{t('pack.pack03.body')}</p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">{t('pack.book')}</button>
            </div>
        </div>
    </div>
  )
}

export default Pack