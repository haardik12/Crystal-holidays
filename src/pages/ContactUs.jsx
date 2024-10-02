import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import Navbar from '../components/Navbar'
import { FaMobileAlt } from 'react-icons/fa'

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className='bg-white py-40 sm:py-44'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl uppercase'>
              feel free to reach out
            </h2>
          </div>
          <div className='mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none'>
            <div className='p-8 sm:p-10 lg:flex-auto'>
              <h3 className='text-2xl font-bold tracking-tight text-gray-900'>
                Crystal Holidays
              </h3>
              <p className='mt-6 text-xl leading-7 text-gray-600'>
                Need assistance or have inquiries? Reach out
                to us anytime, we’re here for you!
              </p>
              {/* <div className='mt-10 flex items-center gap-x-4'>
                <h4 className='flex-none text-sm font-semibold leading-6 text-primary'>
                  What’s included
                </h4>
                <div className='h-px flex-auto bg-gray-100' />
              </div>
              <ul
                role='list'
                className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'
              >
                {includedFeatures.map((feature) => (
                  <li
                    key={feature}
                    className='flex gap-x-3'
                  >
                    <CheckIcon
                      aria-hidden='true'
                      className='h-6 w-5 flex-none text-primary'
                    />
                    {feature}
                  </li>
                ))}
              </ul> */}
            </div>
            <div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
              <div className='rounded-2xl bg-gray-50 py-10 h-full text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
                <div className='mx-auto max-w-md px-4'>
                  <p className='text-base font-semibold text-gray-600'>
                    For inquiries regarding booking,
                    payment, or cancellations, please
                    contact our support team.
                  </p>
                  <p className='mt-6 flex flex-col items-center w-full justify-center gap-2'>
                    <div className='flex justify-center items-center w-full'>
                      <span className='text-sm font-semibold leading-6 tracking-wide text-gray-600 pr-3'>
                        <FaMobileAlt size={18} />
                      </span>
                      <span className='text-xl font-bold tracking-tight text-gray-900'>
                        +91 8287974656
                      </span>
                    </div>
                    {/* <div className='flex justify-center items-center w-full'>
                      <span className='text-sm font-semibold leading-6 tracking-wide text-gray-600 pr-3'>
                        <FaMobileAlt size={18} />
                      </span>
                      <span className='text-xl font-bold tracking-tight text-gray-900'>
                        +91 123456789
                      </span>
                    </div> */}
                  </p>
                  <div
                    href='#'
                    className='mt-10 block w-full rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Contact
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
