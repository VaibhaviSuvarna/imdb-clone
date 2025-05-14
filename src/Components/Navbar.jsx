import React, { useState } from 'react'
import Logo from '../MovieLogo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4 '>

        <img className="w-[50px]"src={Logo} alt=""/>
        <Link to='/'className='text-black-500 text-2xl font-bold hover:text-purple-900'>Movies</Link>
        <Link to='/watchlist'className='text-black-500 text-2xl hover:text-purple-900 font-bold'>Watchlist</Link>
    </div>
  )
}

export default Navbar