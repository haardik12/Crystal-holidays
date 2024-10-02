import React from 'react'
import DestinationCards from './DestinationCards'

// home page card images
import img1 from '../../images/destinations/bali1.jpg'
import img2 from '../../images/destinations/Singapore.jpg'
import img3 from '../../images/destinations/Thailand1.jpg'
import img4 from '../../images/destinations/Malaysia.jpg'
import img5 from '../../images/destinations/Vietnam.jpg'
import img6 from '../../images/destinations/Maldives.jpg'
import img7 from '../../images/destinations/Mauritius.jpg'
import img8 from '../../images/destinations/Seychelles.jpg'
import img9 from '../../images/destinations/dubai.jpg'

// destination detail page video imports
import vid1 from '../videos/bali.mp4'
import vid2 from '../videos/singapore.mp4'
import vid3 from '../videos/thailand.mp4'
import vid4 from '../videos/malaysia.mp4'
import vid5 from '../videos/maldives.mp4'
import vid6 from '../videos/mauritius.mp4'
import vid7 from '../videos/seychelles.mp4'
import vid8 from '../videos/dubai.mp4'
import vid9 from '../videos/vietnam.mp4'

// destination detail page image imports
const DestinationsData = [
  // bali data
  {
    id: 1,
    img: img1,
    video: vid1,
    destinationImages: [
      '/Bali/Balipic2.jpg',
      '/Bali/Balipic4.jpg',
      '/Bali/Balipic1.jpg',
      '/Bali/Balipic3.jpg',
    ],
    title: 'Bali',
    description:
      "Known as the Island of the Gods, Bali is an island paradise that has much to offer its visitors. Lush rice fields, ancient temples, magical sunsets, traditional villages, idyllic beaches and the best hotels in the world are some of the island's most remarkable attractions. Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity. It is also famous for surfers' paradise!",
    tripDuration: [
      {
        option1: [
          {
            Day1: 'Arrival (Private Transfers)',
            Day2: '(Full Day) Watersports with Uluwatu temple (Private Transfers)',
            Day3: 'Full Day Trip to North Bali with Tanah Lot (Private Transfers)  ',
            Day4: '(Full day) West Nusa Penida Tour from Bali (With Snorkeling) [Private Transfers]',
            Day5: '(Full Day) Swing Adventure & Exploring Kintamani Volcano (Private Transfers) + Lunch',
            Day6: 'Leisure in Villa',
            Day7: 'Departure (Private Transfers)',
          },
        ],
      },
    ],
    inclusions: [
      {
        p1: 'STAY AS MENTIONED.',
        p2: 'WELCOME GARLAND FOR EVERY GUEST.',
        p3: 'ALL TOURS ON PRIVATE BASIS.',
        p4: 'AIRPORT TRANSFERS ON PRIVATE BASIS',
        p5: 'DAILY BREAKFAST.',
        p6: 'FULL DAY CAB FOR 12 HOURS.',
        p7: 'HALF DAY CAB FOR 8 HOURS.',
        p8: 'ENTRY TICKETS TO MENTIONED ATTRACTIONS',
        p9: '1 X FLOATING BREAKFAST IN PRIVATE POOL VILLA.',
      },
    ],
    exclusions: [
      {
        p1: 'MEALS.',
        p2: 'VISA ( ON ARRIVAL ).',
        p3: 'AIR FARE.',
        p4: 'TRAVEL INSURANCE.',
        p5: 'TCS 5% ON TOTAL PACKAGE COST.',
        p6: 'ANYTHING NOT MENTIONED IN INCLUSIONS.',
        p7: 'PACKAGE NOT VALID FOR JULY & AUGUST AND DECEMBER PEAK SEASON).',
      },
    ],
    prices: [
      {
        bronze: '34,500',
        silver: '39,500',
        gold: '54,500',
      },
    ],
    packageDetails: [
      {
        bronze: [
          '4 Nights:- The Rani Hotel,Kuta or Similar',
          '2 Nights:- Ashoka Tree Resort, Ubud or Similar',
        ],
        silver: [
          '4 Nights:- Grand Zuri Kuta Bali or Similar',
          '2 Nights:- Alindra Villas, Jimbaranor Similar',
        ],
        gold: [
          '4 Nights:- Sadara Boutique Beach Resort, Nusa Dua or Similar',
          '2 Nights:- Puri Gangga, Ubud or Similar',
        ],
      },
    ],
  },
  // Singapore data
  {
    id: 1,
    img: img2,
    video: vid2,
    destinationImages: [
      '/Singapore/Singaporepic2.jpg',
      '/Singapore/Singaporepic4.jpg',
      '/Singapore/Singaporepic1.jpg',
      '/Singapore/Singaporepic3.jpg',
    ],
    title: 'Singapore',
    description:
      'Singapore is a city that offers a mix of culture, art, architecture, and nature, and is known as the garden city.This fantastic destination is one of the most beautiful man-made wonders that you cannot give a miss. The exquisitely beautiful attractions like Sentosa Island, Gardens by the Bay, Universal Studios and Night Safari are the pride of Singapore tourism.',
    tripDuration: [
      {
        option1: [
          {
            Day1: 'Arrival + Night Safari with Tram Ride',
            Day2: 'Universal Studios',
            Day3: 'Singapore City Tour + Garden by the Bay - Cloud Forest',
            Day4: 'Full Day in Sentosa Island – Cable Car + Madame Tussauds + Images of Singapore + Boat Ride + Wings of Time – Standard Seat',
            Day5: 'Departure',
          },
        ],
      },
    ],
    inclusions: [
      {
        p1: 'STAY AS MENTIONED.',
        p2: 'DAILY BREAKFAST.',
        p3: 'ALL TOURS ON SHARING BASIS.',
        p4: 'AIRPORT TRANSFERS ON PRIVATE BASIS.',
        p5: 'ENTRY TICKETS TO MENTIONED ATTRACTIONS.',
      },
    ],
    exclusions: [
      {
        p1: 'MEALS.',
        p2: 'VISA ( ON ARRIVAL ).',
        p3: 'AIR FARE.',
        p4: 'TRAVEL INSURANCE.',
        p5: 'TCS 5% ON TOTAL PACKAGE COST.',
        p6: 'ANYTHING NOT MENTIONED IN INCLUSIONS.',
        p7: 'COURIER CHARGES.',
        p8: 'PACKAGE NOT VALID FOR JULY & AUGUST AND DECEMBER PEAK SEASON).',
      },
    ],
    prices: [
      {
        bronze: '49,500 ',
        silver: '56,500 ',
        gold: '66,500',
      },
    ],
    packageDetails: [
      {
        bronze: ['4 Nights:- Value Hotel Thomson'],
        silver: ['4 Nights:- Hotel Boss Singapore'],
        gold: ['4 Nights:- Novotel Singapore on Kitchener'],
      },
    ],
  },
  // Thailand data
  {
    id: 1,
    img: img3,
    video: vid3,
    destinationImages: [
      '/Thailand/Thailandpic1.jpg',
      '/Thailand/Thailandpic4.jpg',
      '/Thailand/Thailandpic2.jpg',
      '/Thailand/Thailandpic3.jpg',
    ],
    title: 'Thailand',
    description:
      "Thailand is a Southeast Asian country and one of Asia's most popular tourist destinations, with stunning beaches, vibrant nightlife, and a backpacker-friendly atmosphere. Home to Buddhist temples, exotic wildlife and spectacular islands, Thailand's beaches offer diving, nightlife, partying, romantic getaways, and more.",
    tripDuration: [
      {
        option1: [
          {
            Day1: 'Arrival + Krabi Transfer [Private Transfer]',
            Day2: 'Krabi 4 Island Tour With Lunch By long till Boat [Sharing Transfer]',
            Day3: 'Phuket City Tour + Phuket Hotel Transfer [Private Transfer]',
            Day4: 'Phi Phi Island Tour With Lunch By Big Boat [Sharing Transfer]',
            Day5: 'Tiger Kingdom (Medium Tiger)  [Private Transfer]',
            Day6: 'Departure [Private Transfer]',
          },
        ],
        option2: [
          {
            Day1: 'Arrival [Private Transfer]',
            Day2: 'Krabi 4 Island Tour With Lunch By long till Boat [Sharing Transfer]',
            Day3: 'Phuket City Tour [Private Transfer]',
            Day4: 'Phi Phi Island Tour With Lunch By Big Boat [Sharing Transfer]',
            Day5: 'Phi Phi Island to Phuket [Sharing Transfer]',
            Day6: 'Tiger Kingdom (Medium Tiger)  [Private Transfer]',
            Day7: 'Departure [Private Transfer]',
          },
        ],
      },
    ],
    inclusions: [
      {
        p1: 'STAY AS MENTIONED.',
        p2: 'MEALS AS PER TOURS.',
        p3: 'DAILY BREAKFAST.',
        p4: 'ALL TOURS ON SHARING BASIS.',
        p5: 'AIRPORT TRANSFER ON PRIVATE BASIS.',
        p6: 'ENTRY TICKETS TO MENTIONED ATTRACTIONS.',
      },
    ],
    exclusions: [
      {
        p1: 'MEALS.',
        p2: 'VISA ( ON ARRIVAL ).',
        p3: 'AIR FARE.',
        p4: 'TRAVEL INSURANCE.',
        p5: 'TCS 5% ON TOTAL PACKAGE COST.',
        p6: 'ANYTHING NOT MENTIONED IN INCLUSIONS.',
        p7: 'NATIONAL PARK FEE.',
        p8: 'PACKAGE NOT VALID FOR DECEMBER PEAK SEASON.',
      },
    ],
    prices: [
      {
        bronze: '39,500 ',
        silver: '45,500 ',
      },
    ],
    packageDetails: [
      {
        bronze: [
          '2 Nights:- Deevana Plaza Krabi or Similar',
          '3 Nights:-Coco Retreat Phuket Resort and Spa or Similar',
        ],
        silver: [
          '5 Nights:-Coco Retreat Phuket Resort and Spa or Similar',
          '1 Night:- Phi Phi CoCo Beach Resort',
        ],
      },
    ],
  },
  // Malaysia data
  {
    id: 1,
    img: img4,
    video: vid4,
    destinationImages: [
      '/Malaysia/Malaysiapic2.jpg',
      '/Malaysia/Malaysiapic4.jpg',
      '/Malaysia/Malaysiapic1.jpg',
      '/Malaysia/Malaysiapic3.jpg',
    ],
    title: 'Malaysia',
    description:
      'Malaysia is a wonderful vacation destination for tourists from all across the world. An intriguing blend of diverse wildlife, idyllic islands, magnanimous mountains, rainforests, and rich culinary landscape makes it one of the most visited tourist places in Asia.',
    tripDuration: [
      {
        option1: [
          {
            Day1: 'Arrival',
            Day2: 'Genting highland with batu caves',
            Day3: 'Night city tour with KL tower',
            Day4: 'Departure',
          },
        ],
        option2: [
          {
            Day1: 'Arrival',
            Day2: 'Genting highland with Batu Caves',
            Day3: 'Departure + Langkawi Arrival',
            Day4: 'Langkawi Island Hopping Tour',
            Day5: 'Kuala Lumpur arrival + Night City Tour with KL Tower',
            Day6: 'Departure',
          },
        ],
      },
    ],
    inclusions: [
      {
        p1: 'STAY AS MENTIONED.',
        p2: 'DAILY BREAKFAST.',
        p3: 'ALL TOURS ON SHARING BASIS.',
        p4: 'AIRPORT TRANSFERS ON PRIVATE BASIS.',
        p5: 'ENTRY TICKETS TO MENTIONED ATTRACTIONS.',
      },
    ],
    exclusions: [
      {
        p1: 'MEALS.',
        p2: 'VISA.',
        p3: 'AIR FARE.',
        p4: 'TRAVEL INSURANCE.',
        p5: 'TCS 5% ON TOTAL PACKAGE COST.',
        p6: 'ANYTHING NOT MENTIONED IN INCLUSIONS.',
        p7: 'COURIER CHARGES.',
        p8: 'PACKAGE NOT VALID FOR DECEMBER PEAK SEASON.',
      },
    ],
    prices: [
      {
        bronze: '39,500 ',
        silver: '45,500 ',
      },
    ],
    packageDetails: [
      {
        bronze: ['3 Night:- Ibis Kuala Lumpur City Centre'],
        silver: [
          '3 Night:- Ibis Kuala Lumpur City Centre',
          '2 Nights:- Lagoon Residence Langkawi',
        ],
      },
    ],
  },
  // Dubai data
  {
    id: 1,
    img: img9,
    video: vid8,
    destinationImages: [
      '/Dubai/Dubaipic2.jpg',
      '/Dubai/Dubaipic4.jpg',
      '/Dubai/Dubaipic1.jpg',
      '/Dubai/Dubaipic3.jpg',
    ],
    title: 'Dubai',
    description:
      "Dubai is a city of skyscrapers, ports, and beaches, where big business takes place alongside sun-seeking tourism. Dubai has the most impressive skyline in the world. Beautiful beaches, record-breaking attractions and experiences like no other – Dubai is the place to be in 2024. It's no wonder we are the first city to be named Tripadvisor's #1 Top Destination in the World for three years running.",
    tripDuration: [
      {
        option1: [
          {
            Day1: 'Arrival + Dhow Cruise',
            Day2: 'Desert Safari',
            Day3: 'City Tour + Burj Khalifa',
            Day4: 'Miracle Garden + Global Village',
            Day5: 'Museum of the Future',
            Day6: 'Departure',
          },
        ],
        option2: [
          {
            Day1: 'Arrival + Dhow Cruise',
            Day2: 'Desert Safari',
            Day3: 'City Tour + Burj Khalifa',
            Day4: 'Miracle Garden + Global Village',
            Day5: 'Museum of the Future',
            Day6: 'Ferrari World',
            Day7: 'Departure',
          },
        ],
      },
    ],
    inclusions: [
      {
        p1: 'STAY AS MENTIONED.',
        p2: 'DAILY BREAKFAST.',
        p3: 'ALL TOURS ON SHARING BASIS.',
        p4: 'AIRPORT TRANSFERS ON PRIVATE BASIS.',
        p5: 'ENTRY TICKETS TO MENTIONED ATTRACTIONS.',
      },
    ],
    exclusions: [
      {
        p1: 'MEALS.',
        p2: 'VISA.',
        p3: 'AIR FARE.',
        p4: 'TRAVEL INSURANCE.',
        p5: 'TCS.',
        p6: 'ANYTHING NOT MENTIONED IN INCLUSIONS.',
        p7: 'PACKAGE NOT VALID FOR DECEMBER PEAK SEASON.',
      },
    ],
    prices: [
      {
        bronze: '45,500 ',
        silver: '58,500 ',
      },
    ],
    packageDetails: [
      {
        bronze: ['5 Nights:- Citymax Bur Dubai or similar'],
        silver: [
          '6 Nights:- Citymax Bur Dubai or similar ',
        ],
      },
    ],
  },
  // Vietnam data
  {
    id: 1,
    img: img5,
    video: vid9,
    destinationImages: [
      '/Vietnam/Vietnampic2.jpg',
      '/Vietnam/Vietnampic4.jpg',
      '/Vietnam/Vietnampic1.jpg',
      '/Vietnam/Vietnampic3.jpg',
    ],
    title: 'Vietnam',
    description:
      'Vietnam is a land of contradictions. Here you will find sleepy villages and hill tribes barely a few hours away from modern, bustling cities. The natural, majestic landscapes of the country find their twin in beautifully landscaped gardens and tree-lined boulevards. Vietnam is celebrated for its captivating history, diverse culture, and breathtaking landscapes.',
    tripDuration: [
      {
        option1: [
          {
            Day1: 'Ha Noi Arrival – Hanoi half day city tour + early check in',
            Day2: 'Hoa Lu – Tam Coc – 1 Day Trip (B/L) / group tour',
            Day3: 'Hanoi – Halong Cruise (B/L/D) Shuttle bus',
            Day4: 'Halong - Hanoi (B/Br) / Shuttle bus - Flight to Da Nang',
            Day5: 'Ba Na Hills Full Day Tour – Hoi An Ancient Town (B/L/D) / Group tour',
            Day6: 'Departure (B)',
          },
        ],
      },
    ],
    inclusions: [
      {
        p1: 'PRIVATE DOOR-TO-DOOR PICK-UP & DROP-OFF SERVICES.',
        p2: 'ACCOMMODATION SHARED IN DOUBLE WITH DAILY BREAKFAST.',
        p3: 'DOMESTIC FLIGHT FROM HANOI TO DA NANG.',
        p4: 'ALL SIGHTSEEING TICKETS.',
        p5: 'TISSUES AND WATER ON COACH.',
        p6: 'SERVICES CHARGES AND GOVERNMENT TAX.',
      },
    ],
    exclusions: [
      {
        p1: 'INTERNATIONAL FLIGHTS.',
        p2: 'PERSONAL EXPENSES, TIPS AND GRATUITIES.',
        p3: 'TRAVEL INSURANCE.',
        p4: 'VISA.',
        p5: 'TCS.',
        p6: 'PEAK SEASON OR PUBLIC HOLIDAYS SURCHARGE IF ANY.',
        p7: 'OTHER SERVICES NOT MENTIONED ABOVE.',
      },
    ],
    prices: [
      {
        bronze: '47,500 ',
        silver: '52,500 ',
        gold: '67,500 ',
      },
    ],
    packageDetails: [
      {
        bronze: [
          '2 Nights:- Thang Long Opera or similar',
          '1 Night:- La Pandora cruise',
          '2 Nights:- Cicilia Da Nang or similar',
        ],
        silver: [
          '2 Nights:- La Passion Classic or similar',
          '1 Night:- Le Journey cruise',
          '2 Nights:- Luxury Da Nang or similar',
        ],
        gold: [
          '2 Nights:- Dolce Golden Lake or similar',
          '1 Night:- La Casta cruise',
          '2 Nights:- Grand tourane or similar',
        ],
      },
    ],
  },
  // Maldives data
  {
    id: 1,
    img: img6,
    video: vid5,
    destinationImages: [
      '/Maldives/Maldivespic2.jpg',
      '/Maldives/Maldivespic4.jpg',
      '/Maldives/Maldivespic1.jpg',
      '/Maldives/Maldivespic3.jpg',
    ],
    title: 'Maldives',
    description:
      'The Maldives is an archipelagic state situated in the Indian Ocean known for its luxurious water villas. A tropical haven of white sand beaches, the Maldives is ideal for an adventure, honeymoon, or leisure holiday. The Maldives is world-famous for its myriad of marine life, and is considered to be one of the best snorkelling and diving locations in the world. Swim freely in the Indian Ocean among the colourful arrays of corals, rays, sea turtles, reef sharks and a multitude of other underwater species!',
    tripDuration: [
      {
        option1: [
          {
            Day1: 'Arrival',
            Day2: 'Day at leisure',
            Day3: 'Day at leisure',
            Day4: 'Departure',
          },
        ],
      },
    ],
    inclusions: [
      {
        p1: 'STAY AS MENTIONED.',
        p2: 'MEAL TYPE:- FULL BOARD.',
        p3: 'TRANSFER ON SHARING BASIS.',
        p4: 'RETURN AIRPORT TRANSFERS BY SPEEDBOAT.',
      },
    ],
    exclusions: [
      {
        p1: 'AIR FARE.',
        p2: 'VISA [ON ARRIVAL].',
        p3: 'TRAVEL INSURANCE.',
        p4: 'TCS.',
        p5: 'ANYTHING NOT MENTIONED IN INCLUSIONS.',
        p6: 'PACKAGE NOT VALID FOR DECEMBER PEAK SEASON.',
      },
    ],
    prices: [
      {
        bronze: '68,500 ',
        silver: '87,500 ',
        gold: '1,02,500 ',
      },
    ],
    packageDetails: [
      {
        bronze: [
          'Medhufushi Island Resort',
          '2 Night:- Beach Villa',
          '1 Night:- Water Villa',
        ],
        silver: [
          'Centara Ras Fushi Resort & Spa Maldives',
          '2 Night:- Lagoon Beach Villa',
          '1 Nights:- Overwater Villa',
        ],
        gold: [
          'Sun Siyam Olhuveli Maldives',
          '2 Night:- Deluxe Room',
          '1 Nights:- Water Villa',
        ],
      },
    ],
  },
  // Mauritius data
  {
    id: 1,
    img: img7,
    video: vid6,
    destinationImages: [
      '/Mauritius/Mauritiuspic2.jpg',
      '/Mauritius/Mauritiuspic4.jpg',
      '/Mauritius/Mauritiuspic1.jpg',
      '/Mauritius/Mauritiuspic3.jpg',
    ],
    title: 'Mauritius',
    description:
      'Rich with lush forest, wild waterfalls, unique wildlife, rocky mountains, white sand beaches and breathtaking crystal clear turquoise lagoons, Mauritius is a dream holiday destination for tourists from all over the world. The island of Mauritius is volcanic in origin and is almost entirely surrounded by coral reefs. One of the top favourites for honeymoons and family vacations, Mauritius offers immersive experiences and a multi-ethnic culture to visitors from across the world.',
    tripDuration: [
      {
        option1: [
          {
            Day1: 'Arrival [Sharing Transfer]',
            Day2: 'Full Day North Island tour [Sharing Transfer]',
            Day3: 'Full Day South Island tour [Sharing Transfer]',
            Day4: 'Full Day Ile Aux Cerf Tour [Sharing Transfer]',
            Day5: 'Departure [Sharing Transfer]',
          },
        ],
      },
    ],
    inclusions: [
      {
        p1: 'STAY AS MENTIONED.',
        p2: 'BREAKFAST, DINNER.',
        p3: 'TRANSFER ON SHARING BASIS.',
      },
    ],
    exclusions: [
      {
        p1: 'LUNCH.',
        p2: 'VISA ( ON ARRIVAL ).',
        p3: 'AIR FARE.',
        p4: 'TRAVEL INSURANCE.',
        p5: 'TCS.',
        p6: 'ANYTHING NOT MENTIONED IN INCLUSIONS.',
        p7: 'PACKAGE NOT VALID FOR JULY & AUGUST AND DECEMBER PEAK SEASON).',
      },
    ],
    prices: [
      {
        bronze: '51,000 ',
        silver: '55,500 ',
        gold: '62,500 ',
      },
    ],
    packageDetails: [
      {
        bronze: ['Outrigger Mauritius Beach Resort'],
        silver: ['SO Sofitel Mauritius'],
        gold: ['The Westin Turtle Bay Resort & Spa'],
      },
    ],
  },
  // Seychelles data
  {
    id: 1,
    img: img8,
    video: vid7,
    title: 'Seychelles',
    destinationImages: [
      '/Seychelles/Seychellespic2.jpg',
      '/Seychelles/Seychellespic4.jpg',
      '/Seychelles/Seychellespic1.jpg',
      '/Seychelles/Seychellespic3.jpeg',
    ],
    description:
      "The world's only granite islands in mid-ocean, the world's oldest ocean islands, the world's largest raised coral atoll and a whole host of attractions make up what is surely the world's ultimate tropical paradise. Seychelles is a popular honeymoon destination and a paradise for beach lovers who will fall in love with its white sand beaches and turquoise warm water. Hikers, divers and snorkelers will also love exploring the islands' lush green nature and colourful marine life.",
    tripDuration: [
      {
        option1: [
          {
            Day1 : 'Arrival - Mahe Island to Praslin Island',
Day2 : 'Day at Leisure' ,
Day3 : 'Praslin to Mahe',
Day4 : 'Day at Leisure',
Day5 : 'Day at Leisure',
Day6 : 'Departure',
            
          },
        ],
      },
    ],
    inclusions: [
      {
        p1: 'STAY AS MENTIONED.',
        p2: 'BREAKFAST.',
        p3: 'TRANSFER ON SHARING BASIS.',
        p4: '1 WAY SIC/PVT TRANSFER MAHE AIRPORT TO MAHE JETTY.',
        p5: 'FERRY FROM MAHE TO PRASLIN (ECONOMY CLASS).',
        p6: '1 WAY SIC/PVT TRANSFER PRASLIN JETTY TO PRASLIN HOTEL.',
        p7: '1 WAY SIC/PVT TRANSFER FROM PRASLIN HOTEL TO JETTY.',
        p8: 'FERRY FROM PRASLIN TO MAHE (ECONOMY CLASS).',
        p9: '1 WAY SIC/PVT TRANSFER FROM MAHE JETTY TO MAHE HOTEL.',
        p10: '1 WAY SIC/PVT TRANSFER FROM MAHE HOTEL TO MAHE AIRPORT.',
      },
    ],
    exclusions: [
      {
        p1: 'LUNCH, DINNER.',
        p2: 'VISA ( ON ARRIVAL ).',
        p3: 'AIR FARE.',
        p4: 'TRAVEL INSURANCE.',
        p5: 'TCS.',
        p6: 'ANYTHING NOT MENTIONED IN INCLUSIONS.',
        p7: 'PACKAGE NOT VALID FOR JULY & AUGUST AND DECEMBER PEAK SEASON).',
      },
    ],
    prices: [
      {
        bronze: '83,500 ',
        silver: '88,500 ',
        gold: '97,500 ',
      },
    ],
    packageDetails: [
      {
        bronze: [
          '2Nights Villas De Mer Praslin',
          '3Nights Double Tree by Hilton Mahe',
        ],
        silver: [
          '2Nights The Oasis Hotel Praslin',
          '3Nights Double Tree by Hilton Mahe',
        ],
        gold: [
          '2Nights Coco De mer Hotel Praslin',
          '3Nights Double Tree by Hilton Mahe',
        ],
      },
    ],
  },
]

const Destinations = () => {
  return (
    <>
      <div
        className='bg-gray-50 py-0 bg-gradient-to-b from-white via-cyan-200 to-white w-full mt-10'
        onClick={() => {
          window.scrollTo(0, 0)
        }}
      >
        <section
          data-aos='fade-up'
          className='container w-full'
        >
          <div>
            <div>
              <h1 className='text-center py-12 text-4xl font-semibold uppercase mb-3'>
                Top International{' '}
                <span className='text-primary'>
                  Destinations
                </span>
              </h1>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center place-items-center w-full'>
            {DestinationsData.map((item, index) => (
              <DestinationCards
                //   handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Destinations
