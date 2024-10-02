import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMobileAlt,
} from 'react-icons/fa'
import NatureVid from '../videos/footer.mp4'
import { Link } from 'react-router-dom'

const FooterLinks = [
  {
    title: 'About Us',
    link: '/about',
  },
  {
    title: 'Contact Us',
    link: '/contact',
  },
]

const FooterLinksTwo = [
  {
    title: 'Terms & conditions',
    link: '/about-Us',
  },
  {
    title: 'Disclaimer',
    link: '/Contact-us',
  },
  {
    title: 'Privacy Policy',
    link: '/Contact-us',
  },
]

const Footer = () => {
  return (
    <>
      <div className=' dark:bg-gray-950 py-10 relative overflow-hidden'>
        <video
          autoPlay
          loop
          muted
          className='absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]'
        >
          <source src={NatureVid} type='video/mp4' />
        </video>
        <div className='container'>
          <div className='grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl'>
            <div className='py-8 px-4'>
              <h1 className='flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left'>
                <img
                  src='../../images/logo2.png'
                  alt=''
                  className='max-h-[100px]'
                  style={{mixBlendMode: 'multiply'}}
                />
                {/* TravelloGo */}
              </h1>
              <p className='text-lg mt-4'>Need Help?</p>
              <br />
              <div className='flex items-center gap-3 mt-3'>
                <FaMobileAlt size={30} />
                <div className='flex flex-col gap-1'>
                  <p>Call us</p>
                  <p>+91 123456789</p>
                  <p>+91 123456789</p>
                </div>
              </div>
              {/* social handles */}
              <div>
                <div className='flex items-center gap-3 mt-6'>
                  <a href='#'>
                    <FaInstagram className='text-3xl' />
                  </a>
                  <a href='#'>
                    <FaFacebook className='text-3xl' />
                  </a>
                  <a href='#'>
                    <FaLinkedin className='text-3xl' />
                  </a>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
              <div>
                <div className='py-8 px-4'>
                  <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>
                    company
                  </h1>
                  <ul className='flex flex-col gap-3'>
                    {FooterLinks.map((link) => (
                      <li
                        key={''}
                        className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200'
                      >
                        <Link
                          to={link.link}
                          onClick={() =>
                            window.scrollTo(0, 0)
                          }
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className='py-8 px-4'>
                  <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>
                    company
                  </h1>
                  <ul className='flex flex-col gap-3'>
                    {FooterLinksTwo.map((link) => (
                      <li
                        key={''}
                        className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200'
                      >
                        <Link
                          to={link.link}
                          onClick={() =>
                            window.scrollTo(0, 0)
                          }
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className='py-8 px-4'>
                  <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>
                    more info
                  </h1>
                  <ul className='flex flex-col gap-3 border-l-4 border-primary py-1 pl-4'>
                    <li
                      key={''}
                      className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200'
                    >
                      <Link
                        to={''}
                        onClick={() =>
                          window.scrollTo(0, 0)
                        }
                      >
                        {/* <span className='border-l-8 border-primary py-2 pl-5'></span> */}
                        <span>Address</span>
                      </Link>
                    </li>
                    <li>
                      <span>
                        details about the address.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white'>
              @copyright 2024 Crystal Holidays All rights
              reserved
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
