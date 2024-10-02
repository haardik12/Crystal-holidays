import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import bronze from '../../images/package/free-coin.png'
import silver from '../../images/package/enterprise-coin.png'
import gold from '../../images/package/pro-coin.png'
import { IoMdCheckmark } from 'react-icons/io'
import '../assets/packageCard.css'

const DestinationDetails = () => {
  const location = useLocation()
  const {
    title,
    description,
    tripDuration,
    inclusions,
    exclusions,
    prices,
    packageDetails,
    video,
    destinationImages,
  } = location.state
  console.log(destinationImages)

  return (
    <div className='pt-6'>
      <div className='bg-white'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 items-start justify-between gap-x-8 gap-y-16 px-4 py-10 sm:px-6 sm:pt-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8'>
          {/* Video and description */}
          <div className='mt-20 sm:mt-0'>
            <div className='right-0 top-0 h-full overflow-hidden w-full object-cover border rounded-2xl'>
              <video
                autoPlay
                loop
                muted
                className='overflow-hidden object-cover w-full h-[50vh] sm:h-[45vh]'
              >
                <source src={video} type='video/mp4' />
              </video>
            </div>
            <h2 className='mt-14 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl uppercase'>
              {title}
            </h2>
            <p className='mt-4 text-gray-500'>
              {description}
            </p>
          </div>

          {/* Image grid */}
          <div className='grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8'>
            {destinationImages.map((image, index) => (
              <img
                key={index}
                alt={`Bali image ${index + 1}`}
                src={image}
                className='rounded-lg bg-gray-100 h-[300px] w-[300px] object-cover'
              />
            ))}
            {/* <img
              alt='Sample image 1'
              src='https://images.pexels.com/photos/1544351/pexels-photo-1544351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              className='rounded-lg bg-gray-100 h-[300px] w-[300px]'
            />
            <img
              alt='Sample image 2'
              src='https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              className='rounded-lg bg-gray-100 h-[300px] w-[300px]'
            />
            <img
              alt='Sample image 3'
              src='https://images.pexels.com/photos/15671657/pexels-photo-15671657/free-photo-of-kiyomizu-dera-temple-entrance.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              className='rounded-lg bg-gray-100 h-[300px] w-[300px]'
            />
            <img
              alt='Sample image 4'
              src='https://images.pexels.com/photos/4504336/pexels-photo-4504336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              className='rounded-lg bg-gray-100 h-[300px] w-[300px]'
            /> */}
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center items-center py-4'>
        <h1 className='text-center text-xl sm:text-4xl font-semibold uppercase'>
          trip{' '}
          <span className='text-primary'>itinerary</span>
        </h1>
      </div>

      {/* Trip Duration List */}
      <div className='mx-auto max-w-2xl px-8 sm:px-8 lg:px-8 py-4 lg:max-w-7xl'>
        {tripDuration && tripDuration.length > 0 && (
          <ul className='mt-2 space-y-[1.2px]'>
            {Object.entries(tripDuration[0]).map(
              ([optionKey, optionValue], index) => (
                <li
                  key={index}
                  className='flex flex-col gap-y-4'
                >
                  {/* Display the option header if more than one option exists */}
                  {tripDuration[0].option2 && (
                    <h2 className='font-bold text-xl uppercase my-4 flex text-center justify-center items-center'>
                      {optionKey.replace(
                        'option',
                        'Option '
                      )}
                    </h2>
                  )}

                  {/* Display the days and descriptions for each option */}
                  {optionValue.length > 0 &&
                    Object.entries(optionValue[0]).map(
                      ([day, detail], dayIndex) => (
                        <div
                          key={dayIndex}
                          className='flex justify-between gap-x-14 py-4'
                        >
                          <div>
                            <h3 className='uppercase font-sans font-semibold flex items-center justify-center text-xl'>
                              {day}
                            </h3>
                          </div>
                          <div>
                            <p className='font-bold'>:</p>
                          </div>
                          <div className='flex-grow text-xl font-sans'>
                            {detail}
                          </div>
                        </div>
                      )
                    )}
                </li>
              )
            )}
          </ul>
        )}
      </div>

      <div className='w-full flex justify-center items-center'>
        <h1 className='text-center py-8 text-xl sm:text-4xl font-semibold uppercase'>
          Inclusions{' '}
          <span className='text-primary'>exclusions</span>
        </h1>
      </div>

      {/* inclusion exclusion list */}
      <div className='mx-auto max-w-9xl px-4 lg:px-4 py-4'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 items-start justify-between gap-x-8 gap-y-6 px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8'>
          <div className='w-full'>
            <h3 className='text-xl font-semibold uppercase py-4'>
              Inclusions
            </h3>
            {inclusions && inclusions.length > 0 && (
              <ul className='list-disc pl-5'>
                {Object.values(inclusions[0]).map(
                  (inclusion, index) => (
                    <li
                      className='gap-x-14 py-2'
                      key={index}
                    >
                      {inclusion}
                    </li>
                  )
                )}
              </ul>
            )}
          </div>

          <div className='w-full'>
            <h3 className='text-xl font-semibold uppercase py-4'>
              Exclusions
            </h3>
            {exclusions && exclusions.length > 0 && (
              <ul className='list-disc pl-5'>
                {Object.values(exclusions[0]).map(
                  (exclusion, index) => (
                    <li
                      className=' gap-x-1 py-2'
                      key={index}
                    >
                      {exclusion}
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-9xl px-4 lg:px-4 py-4'>
        <div>
          <div className='mx-auto grid max-w-2xl grid-cols-1 items-center justify-items-center gap-x-8 gap-y-16 px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:px-8'>
            {/* First Card */}

            <article className='relative h-[470px] w-full bg-white p-8 rounded-[1.75rem] shadow-2xl transition-all duration-400 flex flex-col'>
              <div className='card-pricing absolute bg-gradient-to-r from-blue-400 to-blue-500 w-15 h-28 right-6 -top-4 pt-5 text-center text-white px-4'>
                <div className='font-rubik text-2xl'>
                  {prices && prices.length > 0 && (
                    <span className='text-lg'>
                      {Object.values(prices[0])[0]}
                    </span>
                  )}
                </div>
                <span className='block text-xs'>
                  per person
                </span>
              </div>

              <header className='grid'>
                <div className='w-10 h-10 bg-blue-100 rounded-full mb-4 grid place-items-center'>
                  <img
                    src={bronze}
                    alt='Bronze plan'
                    className='w-8 h-8'
                  />
                </div>
                <span className='block text-gray-400 text-xs uppercase mb-1'>
                  Bronze plan
                </span>
                <h1 className='text-3xl text-gray-800 mb-4'>
                  Basic
                </h1>
              </header>

              <div className='flex-grow'>
                {packageDetails &&
                  packageDetails.length > 0 && (
                    <ul className='grid gap-2 mb-8'>
                      {Object.entries(packageDetails[0])
                        .filter(([key]) => key === 'bronze')
                        .map(([key, details], index) => (
                          <li
                            key={index}
                            className='flex flex-col'
                          >
                            {details.map((detail, i) => (
                              <div
                                key={i}
                                className='flex items-start py-1'
                              >
                                <IoMdCheckmark className='text-2xl text-blue-500 mr-2 min-w-[22px] min-h-[22px]' />
                                <p className='text-lg'>
                                  {detail}
                                </p>
                              </div>
                            ))}
                          </li>
                        ))}
                    </ul>
                  )}
              </div>

              {/* Ensure the button is positioned at the bottom */}
              <NavLink to={'/contact'}>
                <button className='mt-auto py-5 h-[80px] uppercase w-full text-base rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 text-white cursor-pointer hover:shadow-lg transition-all duration-400'>
                  enquire now
                </button>
              </NavLink>
            </article>

            {/* second card */}

            <article className='relative h-[470px] w-full bg-white p-8 rounded-[1.75rem] shadow-2xl transition-all duration-400 flex flex-col'>
              <div className='card-pricing absolute bg-gradient-to-r from-blue-400 to-blue-500 w-15 h-28 right-6 -top-4 pt-5 text-center text-white px-4'>
                <div className='font-rubik text-2xl'>
                  {prices && prices.length > 0 && (
                    <span className='text-lg'>
                      {Object.values(prices[0])[1]}
                    </span>
                  )}
                </div>
                <span className='block text-xs'>
                  per person
                </span>
              </div>

              <header className='grid'>
                <div className='w-10 h-10 bg-blue-100 rounded-full mb-4 grid place-items-center'>
                  <img
                    src={silver}
                    alt='Bronze plan'
                    className='w-8 h-8'
                  />
                </div>
                <span className='block text-gray-400 text-xs uppercase mb-1'>
                  Bronze plan
                </span>
                <h1 className='text-3xl text-gray-800 mb-4'>
                  Basic
                </h1>
              </header>

              <div className='flex-grow'>
                {packageDetails &&
                  packageDetails.length > 0 && (
                    <ul className='grid gap-2 mb-8'>
                      {Object.entries(packageDetails[0])
                        .filter(([key]) => key === 'silver')
                        .map(([key, details], index) => (
                          <li
                            key={index}
                            className='flex flex-col'
                          >
                            {details.map((detail, i) => (
                              <div
                                key={i}
                                className='flex items-start py-1'
                              >
                                <IoMdCheckmark className='text-2xl text-blue-500 mr-2 min-w-[22px] min-h-[22px]' />
                                <p className='text-lg'>
                                  {detail}
                                </p>
                              </div>
                            ))}
                          </li>
                        ))}
                    </ul>
                  )}
              </div>

              {/* Ensure the button is positioned at the bottom */}
              <NavLink to={'/contact'}>
                <button className='mt-auto py-5 h-[80px] uppercase w-full text-base rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 text-white cursor-pointer hover:shadow-lg transition-all duration-400'>
                  enquire now
                </button>
              </NavLink>
            </article>

            {/* third card */}
            {packageDetails &&
              prices &&
              packageDetails[0].gold && (
                <article className='relative h-[470px] w-full bg-white p-8 rounded-[1.75rem] shadow-2xl transition-all duration-400 flex flex-col'>
                  <div className='card-pricing absolute bg-gradient-to-r from-blue-400 to-blue-500 w-15 h-28 right-6 -top-4 pt-5 text-center text-white px-4'>
                    <div className='font-rubik text-2xl'>
                      {prices && prices.length > 0 && (
                        <span className='text-lg'>
                          {Object.values(prices[0])[2]}
                        </span>
                      )}
                    </div>
                    <span className='block text-xs'>
                      per person
                    </span>
                  </div>

                  <header className='grid'>
                    <div className='w-10 h-10 bg-blue-100 rounded-full mb-4 grid place-items-center'>
                      <img
                        src={gold}
                        alt='Bronze plan'
                        className='w-8 h-8'
                      />
                    </div>
                    <span className='block text-gray-400 text-xs uppercase mb-1'>
                      Bronze plan
                    </span>
                    <h1 className='text-3xl text-gray-800 mb-4'>
                      Basic
                    </h1>
                  </header>

                  <div className='flex-grow'>
                    {packageDetails &&
                      packageDetails.length > 0 && (
                        <ul className='grid gap-2 mb-8'>
                          {Object.entries(packageDetails[0])
                            .filter(
                              ([key]) => key === 'gold'
                            )
                            .map(
                              ([key, details], index) => (
                                <li
                                  key={index}
                                  className='flex flex-col'
                                >
                                  {details.map(
                                    (detail, i) => (
                                      <div
                                        key={i}
                                        className='flex items-start py-1'
                                      >
                                        <IoMdCheckmark className='text-2xl text-blue-500 mr-2 min-w-[22px] min-h-[22px]' />
                                        <p className='text-lg'>
                                          {detail}
                                        </p>
                                      </div>
                                    )
                                  )}
                                </li>
                              )
                            )}
                        </ul>
                      )}
                  </div>

                  {/* Ensure the button is positioned at the bottom */}
                  <NavLink to={'/contact'}>
                    <button className='mt-auto py-5 h-[80px] uppercase w-full text-base rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 text-white cursor-pointer hover:shadow-lg transition-all duration-400'>
                      enquire now
                    </button>
                  </NavLink>
                </article>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationDetails
