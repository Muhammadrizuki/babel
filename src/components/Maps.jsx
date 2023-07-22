import React from 'react'
import {MdLocationOn} from 'react-icons/md'

const Maps = () => {
  return (
    <div className='max-w-[500px] mx-auto py-16 px-4'>
       <div className='grid grid-rows-none grid-cols-2 md:grid-cols-5 py-5 gap-2 md:gap-4'>
            <div className='flex flex-col aspect-w-1 aspect-h-1 items-center text-center'>
                <MdLocationOn size={70}/>
                <p>NEBERAN</p>
            </div>
            <div className='flex flex-col aspect-w-1 aspect-h-1 items-center text-center'>
                <MdLocationOn size={70}/>
                <p>TAHURA</p>
            </div>
            <div className='flex flex-col aspect-w-1 aspect-h-1 items-center text-center'>
                <MdLocationOn size={70}/>
                <p>MARRA</p>
            </div>
            <div className='flex flex-col aspect-w-1 aspect-h-1 items-center text-center'>
                <MdLocationOn size={70}/>
                <p>BRIDGE OF LOVE</p>
            </div>
            <div className='flex flex-col aspect-w-1 aspect-h-1 items-center text-center col-span-2 md:col-span-none'>
                <MdLocationOn size={70}/>
                <p>TWIN WATERFALL</p>
            </div>
       </div>
    </div>
  )
}

export default Maps