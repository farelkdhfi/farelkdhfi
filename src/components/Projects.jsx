import React from 'react'
import Figma from '../assets/figma.png'
import Canva from '../assets/canva.png'
import Photoshop from '../assets/photoshop.png'

const Projects = () => {
    return (
        <section className='w-full py-28 px-20 flex flex-col justify-center items-center bg-black'>
            <h1 className='text-3xl font-semibold text-white mb-8'>MY SKILL SET</h1>
            <div className='flex flex-wrap gap-4'>
                <div className=' w-70 h-70 bg-[#000] rounded-lg ring ring-white/10 flex justify-center items-center text-white/70 relative overflow-hidden'>
                    <img src={Figma} alt="" className=' absolute w-20 grayscale opacity-20' />
                    <p className=' absolute bottom-5 font-semibold text-lg z-10'>Figma</p>
                </div>
                <div className=' w-70 h-70 bg-[#000] rounded-lg ring ring-white/10 text-white/70 flex justify-center items-center relative overflow-hidden'>
                    <img src={Photoshop} alt="" className=' absolute w-50 grayscale opacity-20' />
                    <p className=' absolute bottom-5 font-semibold text-lg'>Photoshop</p>
                </div>
                <div className=' w-70 h-70 bg-[#000] rounded-lg ring ring-white/10 text-white/70 flex justify-center items-center relative overflow-hidden'>
                    <img src={Canva} alt="" className=' absolute w-30 grayscale opacity-20' />
                    <p className=' absolute bottom-5 font-semibold text-lg z-10'>Canva</p>
                </div>
                <div className=' w-70 h-70 bg-[#000] rounded-lg ring ring-white/10 text-white/70 flex justify-center items-center'>
                    <p className=' font-semibold text-lg'>CapCut</p>
                </div>
            </div>
        </section>
    )
}

export default Projects