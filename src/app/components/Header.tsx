import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='fixed bg-slate-900 w-full h-16 block -mt-0'>
        <nav >
            <h1 className='inline pt-11 fixed -top-8 left-12 font-extrabold text-3xl  cursor-pointer'>Navbar</h1>
            <ul className='pt-5 inline absolute -right-40' >
            <Link href="/">
              <li className='inline absolute right-60 mr-40 top-5 text-xl font-extrabold'>Home</li>
              </Link>
              <Link  href="#about" >
              <li className='inline absolute right-80 ml-20 top-5 text-xl font-extrabold'>About</li>
              </Link>
              
              <li className='inline absolute right-56 ml-12 top-5 text-xl font-extrabold'>Service</li>  
            </ul>
        </nav>
    </header>
  )
}

export default Header