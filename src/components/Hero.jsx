import React from 'react'
import MyPhotos from '../assets/selff.png'


const Hero = () => {
  return (
    <section className='w-full bg-white lg:h-screen lg:px-20 px-5 lg:flex relative overflow-hidden lg:items-center lg:justify-center'>
      {/* Element */}
      <div className=' flex flex-col z-10 text-center justify-center items-center'>
        <div className='z-50'>
          <h1 className="text-6xl uppercase max-w-3xl font-semibold text-red-400 z-50"
          >Coding Enthusiast. Lifelong Learner.</h1>
        </div>
        <style>{`
                  .smooth-gradient-shine {
                    background: linear-gradient(
                      90deg,
                      rgba(255, 255, 255, 0.8),
                      rgba(200, 200, 200, 0.4),
                      rgba(255, 255, 255, 0.9),
                      rgba(180, 180, 180, 0.3),
                      rgba(255, 255, 255, 0.8)
                    );
                    background-size: 400%;
                    background-clip: text;
                    -webkit-background-clip: text;
                    color: transparent;
                    animation: smooth-shine 20s ease-in-out infinite;
                  }

                  @keyframes smooth-shine {
                    0% {
                      background-position: 200% 0;
                    }
                    50% {
                      background-position: -100% 0;
                    }
                    100% {
                      background-position: 200% 0;
                    }
                  }
                `}
        </style>
        {/* <p className='text-white/50 max-w-md my-6 text-xs'>welcome to my digital space where I share the projects I've built, things I've learned, and what I'm passionate about.</p> */}

        <div className='flex gap-x-2 mt-6 z-10'>
          <button className='py-2 px-4 rounded-xl z-10  text-white/70 text-sm'>Get Started ▾</button>
        </div>
      </div>

      <div className='absolute bottom-0 h-[80vh] z-20'>
        <img src={MyPhotos} alt="" className=' h-full brightness-100' />
      </div>
    </section>
  )
}

export default Hero