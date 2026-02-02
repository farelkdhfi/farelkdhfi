import React from 'react'
import DataAnalyst from '../assets/dataanalyst3.png'
import FrontEnd from '../assets/frontend2.png'

const Work = () => {
    return (
        <section className='w-full py-24 px-20 flex flex-col justify-center items-center bg-black'>
            <h1 className='text-2xl font-semibold text-white/80 mb-8 uppercase'>Focus Skill</h1>
            <div className='w-full flex gap-6'>
                <div className=' w-1/2 h-90 bg-[#000] rounded-lg ring ring-white/10 flex justify-center items-center text-white/70 relative overflow-hidden'>
                    <img src={DataAnalyst} alt="" className=' absolute opacity-80 w-full h-full'/>
                    <p className=' text-3xl font-semibold z-10 text-white'>DATA ANALYST</p>
                </div>

                <div className='flex flex-col w-1/2 gap-6'>
                    <div className='bg-[#151515] rounded-lg h-full w-full'>
                    </div>
                    <div className='bg-[#151515] rounded-lg h-full w-full'>
                    </div>
                </div>
            </div>

            <div className='w-full flex gap-6 mt-8'>
                <div className='flex flex-col w-1/2 gap-6'>
                    <div className='bg-[#151515] rounded-lg h-full w-full'>
                    </div>
                    <div className='bg-[#151515] rounded-lg h-full w-full'>
                    </div>
                </div>
                <div className=' w-1/2 h-90 bg-[#000] rounded-lg ring ring-white/10 flex justify-center items-center text-white/70 relative overflow-hidden'>
                    <p className=' text-3xl font-semibold text-white z-10'>FRONTEND WEB</p>
                    <img src={FrontEnd} alt="" className=' absolute opacity-80 w-full h-full'/>
                </div>
            </div>

        </section>
    )
}

export default Work