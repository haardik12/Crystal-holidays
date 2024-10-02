/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import './styling/Carousel.css'
// import logo2 from '../../images/logo2.png'

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      slideRight()
    }, 2500)

    return () => {
      clearTimeout(timeOut)
    }
  }, [current])

  const slideRight = () => {
    setCurrent(
      current === images.length - 1 ? 0 : current + 1
    )
  }

  return (
    <div className='carousel relative'>
      <div className='absolute inset-0 flex justify-center items-center'>
        {/* <img
          src={logo2}
          alt='Logo'
          className='h-72 w-72 object-contain z-10'
          style={{ opacity: '0.4'}}
        /> */}
        <h1
          className='z-10 uppercase font-semibold text-3xl sm:text-5xl md:text-7xl w-full text-gray-200'
          style={{ opacity: '0.4' }}
        >
          Crystal Holidays
        </h1>
      </div>
      <div className='carousel_wrapper'>
        {images.map((image, index) => {
          return (
            /* (condition) ? true : false */

            <div
              key={index}
              className={
                index == current
                  ? 'carousel_card carousel_card-active'
                  : 'carousel_card'
              }
            >
              <img
                className='card_image'
                src={image.image}
                alt=''
              />
              <div className='card_overlay'>
                <h2 className='card_title text-lg sm:text-2xl'>
                  {image.title}
                </h2>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Carousel
