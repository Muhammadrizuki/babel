import React from 'react'
import {MdLocationOn} from 'react-icons/md'

const Maps = () => {
  return (
    <div className='max-w-[500px] mx-auto py-16 px-4'>
       <div className='grid grid-rows-none grid-cols-2 md:grid-cols-5 py-5 gap-2 md:gap-4'>
            <div className='flex flex-col aspect-w-1 aspect-h-1 items-center text-center'>
                <a href='https://goo.gl/maps/E5cBkEP9nx6xHsNXA' >
                    <MdLocationOn size={70} className='hover:fill-green-600 transition-colors ease-in'/>
                </a>                
                <p>NEBERAN</p>
            </div>
            <div className='flex flex-col aspect-w-1 aspect-h-1 items-center text-center'>
                <a href='https://goo.gl/maps/XNAzw1u9ej5QxZmi8' >
                    <MdLocationOn size={70} className='hover:fill-green-600 transition-colors ease-in'/>
                </a>                
                <p>TAHURA</p>
            </div>
            <div className='flex flex-col aspect-w-1 aspect-h-1 items-center text-center'>
                <a href='https://goo.gl/maps/apmFkVJFDCwtPX8N9' >
                    <MdLocationOn size={70} className='hover:fill-green-600 transition-colors ease-in'/>
                </a>                
                <p>MARRA</p>
            </div>
            <div className='flex flex-col aspect-w-1 aspect-h-1 items-center text-center'>
                <a href='https://goo.gl/maps/jmnGR3MV7X9xzvCs6' >
                    <MdLocationOn size={70} className='hover:fill-green-600 transition-colors ease-in'/>
                </a>                
                <p>BRIDGE OF LOVE</p>
            </div>
            <div className='flex flex-col items-center text-center col-span-2 md:col-span-1'>
                <a href='https://goo.gl/maps/jUESJTCWBcF7T9r46' >
                    <MdLocationOn size={70} className='hover:fill-green-600 transition-colors ease-in'/>
                </a>
                <p>TWIN WATERFALL</p>
            </div>
       </div>
    </div>
  )
}

export default Maps