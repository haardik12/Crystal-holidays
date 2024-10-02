/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

const DestinationCards = (props) => {
  const {
    img,
    title,
    description,
    tripDuration,
    inclusions,
    exclusions,
    prices,
    packageDetails,
    video,
    destinationImages,
  } = props

  return (
    <>
      <Link
        to={`/${title}`}
        state={{
          img,
          title,
          description,
          tripDuration,
          inclusions,
          exclusions,
          prices,
          packageDetails,
          video,
          destinationImages,
        }}
      >
        <div className='max-w-[420px] max-h-full gap-4'>
          <div className='shadow-2xl bg-black scale-90 transition-all duration-300 hover:scale-95 dark:bg-slate-950 dark:text-white cursor-pointer px-1 h-[580px] border rounded-3xl mb-2 flex flex-col justify-center items-center'>
            <div className='overflow-hidden flex justify-center items-end rounded-2xl'>
              <h1 className=' absolute line-clamp-1 font-bold text-white flex justify-center items-start mb-8 z-20 text-4xl uppercase'>
                {/* <IoLocationSharp size={30}/> */}
                {title}
              </h1>
              <img
                src={img}
                alt='No image'
                className='absolute top-0 left-0 w-full h-full object-cover rounded-2xl'
                style={{ opacity: '0.5' }}
              />
            </div>

            <div className='space-y-2 p-3'>
              <p className='line-clamp-2 text-center italic z-20 text-white'>
                {description}
              </p>
            </div>
            <p className='text-xl italic font-semibold z-20 text-white'>
              know more...
            </p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default DestinationCards
