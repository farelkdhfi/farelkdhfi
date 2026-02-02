import React from 'react'
import MyPhotos from '../assets/IMG_7308.jpeg'

const Navbar = () => {
  return (
    <header className='lg:px-20 w-full absolute z-50'>
      <nav className='w-full flex justify-between items-center h-20 bg-transparent '>
        <h2 className='text-2xl font-black text-black font-serif italic'>F</h2>
        <div className=' flex gap-x-6 font-medium text-black/70'>
          <p>Profile</p>
          <p>Project</p>
          <p>Experience</p>
          <p>Contact</p>
        </div>
      </nav>
    </header>

  )
}

export default Navbar