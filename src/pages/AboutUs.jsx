import React from 'react'
import { NavLink } from 'react-router-dom'

const AboutUs = () => {
  return (
    <section className='bg-gradient-to-b from-white via-cyan-100 to-white text-black py-40 px-6'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-16 uppercase'>
          About <span className='text-primary'>Us</span>
        </h2>
        <p className='text-xl mb-8'>
          Discover the world with us! At{' '}
          <span className='font-bold'>
            CRYSTAL HOLIDAYS
          </span>
          , we specialize in crafting unforgettable
          experiences tailored just for you. Whether you’re
          seeking a relaxing beach getaway, an adventurous
          trek in the mountains, or a cultural city tour,
          our expert team is here to guide you every step of
          the way.
        </p>
        <p className='text-xl mb-8'>
          With personalized itineraries, insider tips, and
          exclusive deals, we’ll help you explore new
          destinations and create memories that will last a
          lifetime. Let’s embark on your next adventure
          together—where will your journey take you?
        </p>
        <hr className='border-t border-gray-200 my-8' />
        <NavLink
          to='/'
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <button className='mt-10 bg-white text-blue-500 hover:text-white hover:bg-blue-600 font-bold py-3 px-8 rounded-full transition-all duration-300'>
            Start Your Journey
          </button>
        </NavLink>
      </div>
    </section>
  )
}

export default AboutUs
