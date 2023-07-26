import React from 'react'
import pic1 from '../assets/pic1.jpg'

const Gallery = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-10 px-4 text-center'>
        <div className='w-full grid grid-rows-none md:grid-cols-2 py-5 gap-2 md:gap-4'>
            <div className='relative'>
                <img src={pic1} alt='/'/>
            </div>
        </div>
    </div>
  )
}

export default Gallery