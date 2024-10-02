import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { NavbarLinks } from './Navbar links/NavbarLinks'
import PropTypes from 'prop-types'

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  console.log('showMenu', showMenu)
  return (
    <div
      className={`${
        showMenu ? 'left-0' : '-left-[100%]'
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className='card'>
        <div className='flex items-center justify-start gap-3'>
          <FaUserCircle size={50} />
          <div>
            <h1>Crsytal Holidays</h1>
          </div>
        </div>
        <nav className='mt-12'>
          <ul className='space-y-4 text-xl'>
            {NavbarLinks.map((data) => (
              // eslint-disable-next-line react/jsx-key
              <li>
                <Link
                  to={data.link}
                  onClick={() => setShowMenu(false)}
                  className='mb-5 inline-block'
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

ResponsiveMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  setShowMenu: PropTypes.func.isRequired,
}

export default ResponsiveMenu
