/* eslint-disable react/prop-types */
import React from 'react'

const ServicesCard = (props) => {
    const {
      title,
      description,
      icon
    } = props

  return (
    <>
      <div className='shadow-lg bg-white transition-all duration-500 rounded-2xl hover:shadow-inner dark:bg-slate-950 dark:text-white px-3 h-[250px] flex flex-col justify-center items-center'>
        <div className='overflow-hidden'>
          <svg
            aria-hidden='true'
            className='mx-auto mt-2 h-[60px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 items-center'
            viewBox='0 0 576 512'
            xmlns='http://www.w3.org/2000/svg'
            width='32px'
            height='32px'
          >
            <path d={icon.path} />
          </svg>
        </div>

        <div className='space-y-2 p-3'>
          <h1 className='line-clamp-1 font-bold text-xl text-center'>
            {title}
          </h1>
          <p className='line-clamp-3 text-center'>{description}</p>
        </div>
      </div>
    </>
  )
}

export default ServicesCard