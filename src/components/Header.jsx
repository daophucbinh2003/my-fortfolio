import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full p-5 flex justify-evenly items-center text-white'>
        {/* Person App navigate */}
        {/* Use link -> route */}
        <Link to="/personal-app" className='text-lg'>
            Personal App
        </Link>
        
        {/* About me navigate */}
        <Link to="/about-me" className='text-lg'>
            About Me
        </Link>
    </div>
  )
}

export default Header