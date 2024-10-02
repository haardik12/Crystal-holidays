import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMenuAlt3, HiMenuAlt1 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <>
      <nav className='fixed top-0 right-0 w-full bg-white text-black z-50'>
        <div className='bg-primary text-white'>
          <div className='container py-[12px]'>
            <div className='flex justify-between'>
              <p>yourEmail@gmail.com</p>
              <p className='border-2 rounded-2xl py-1 px-6'>
                +91 8287974656
              </p>
            </div>
          </div>
        </div>
        <div className='bg-white w-full container py-1 sm:py-0 flex justify-between items-center'>
          {/* Left side: Logo */}
          <div className='flex justify-start'>
            <Link
              to='/'
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            >
              <img
                src='../../images/logo.png'
                className='h-20 w-20 mix-blend-multiply contrast-125'
                alt='Logo'
              />
            </Link>
          </div>

          {/* Center: Title (Mobile only) */}
          <div className='flex-grow w-full justify-center items-center text-center block md:hidden'>
            <h1 className='text-xl font-bold flex justify-center text-center'>
              Crystal Holidays
            </h1>
          </div>

          {/* Right side: Navigation (Desktop) */}
          <div className='hidden md:block'>
            <ul className='flex justify-end gap-9'>
              <li className='py-4 uppercase'>
                <NavLink
                  to='/'
                  activeClassName='active'
                  onClick={() => {
                    window.scrollTo(0, 0)
                  }}
                >
                  HOME
                </NavLink>
              </li>
              <li className='py-4 uppercase'>
                <NavLink
                  to=''
                  activeClassName='active'
                  onClick={() => {
                    window.scrollTo(0, 0)
                  }}
                >
                  Payment
                </NavLink>
              </li>
              <li className='py-4 uppercase'>
                <NavLink
                  to='/about'
                  activeClassName='active'
                  onClick={() => {
                    window.scrollTo(0, 0)
                  }}
                >
                  About Us
                </NavLink>
              </li>
              <li className='py-4 uppercase'>
                <NavLink
                  to='/contact'
                  activeClassName='active'
                  onClick={() => {
                    window.scrollTo(0, 0)
                  }}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Mobile Hamburger icon (Right) */}
          <div className='md:hidden block'>
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className='cursor-pointer transition-all'
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className='cursor-pointer transition-all'
                size={30}
              />
            )}
          </div>
        </div>

        <ResponsiveMenu
          setShowMenu={setShowMenu}
          showMenu={showMenu}
        />
      </nav>
    </>
  )
}

export default Navbar
