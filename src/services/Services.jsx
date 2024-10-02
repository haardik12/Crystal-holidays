import React from 'react'
import ServicesCard from './ServicesCard'
import { SvgIconPaths } from '../svg/SvgIconsPaths'

const ServiceData = [
  {
    title: 'Accommodation',
    description:
      'An establishment that provides lodging and usually meals, entertainment, and various personal services for the public.',
  },
  {
    title: 'Flights',
    description:
      'Our wolly Planned Itineraries By Experts With Exceptional Value For Money.',
  },
  {
    title: 'Visa',
    description:
      'Manage your overseas documentation to be best for your ease',
  },
  {
    title: 'Sightseeing',
    description:
      'your personal companion for theft and any mishappening to your life and assets on the trip.',
  },
  {
    title: 'Cruise (International Cruise)',
    description: 'To explore the world by land or sea.',
  },
  {
    title: 'Transfers',
    description:
      'Your true friend in your help at any moment.',
  },
]

const Services = () => {
  return (
    <>
      <div className='bg-gray-50 py-0 bg-gradient-to-b from-white via-cyan-100 to-white mb-10'>
        <section data-aos='fade-up' className='container'>
          <h1 className='text-center py-12 text-4xl font-semibold uppercase mb-3'>
            servi<span className='text-primary'>ces</span>
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {ServiceData.map((item, index) => (
              <ServicesCard
                //   handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
                icon={
                  SvgIconPaths[index % SvgIconPaths.length]
                }
              />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Services