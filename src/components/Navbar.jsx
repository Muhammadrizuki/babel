import React, {useState} from 'react'
import {MdLanguage} from 'react-icons/md'
import { useTranslation } from 'react-i18next'

const Navbar = () => {

  const [t, i18n] = useTranslation('global');

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }
  const [isClicked, setIsClicked] = useState(true);

  return (
    <div className='flex w-full justify-between items-center h-20 p-4 absolute text-white z-10'>
        <div className='z-10'>
          <h1>BA.BEL</h1>
        </div>
        <div className='flex'>
          <MdLanguage className='cursor-pointer hover:fill-slate-400 transition-colors ease-in' size={25} onClick={() => isClicked ? (handleChangeLanguage('id'), setIsClicked(!isClicked)) : (handleChangeLanguage('en'), setIsClicked(!isClicked))}/>
        </div>
    </div>
  )
}

export default Navbar