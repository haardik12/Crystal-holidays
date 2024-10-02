import React from 'react'
import Services from '../services/services'
import Destinations from '../destinations/Destinations'
import Carousel from '../slider/Carousel'
import { countries } from '../slider/Data'

const Home = () => {
  return (
    <>
      {/* banner begins */}
      <div className='mt-32 relative'>
        <div className='w-full h-[582px] text-center text-white bg-opacity-55'>
          <Carousel
            images={countries}
            className='w-full object-contain'
          />
        </div>
      </div>
      {/* banner ends */}
      {/* destination begins */}
      <Destinations />
      {/* destination end */}
      {/* services begin */}
      <Services />
      {/* services ends */}
    </>
  )
}

export default Home