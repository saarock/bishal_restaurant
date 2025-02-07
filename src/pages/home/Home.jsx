import React from 'react'
import Hero from '../../components/sections/Hero'
import Service from '../../components/sections/Service'
import HotelShowCase from '../../components/sections/HoteShowCase'
import Famous from '../../components/sections/Famous'
import Discount from '../../components/sections/Discount'
import Gallary from '../../components/sections/Gallary'
import RestaurantPartner from '../../components/sections/ResturantPatner'

const Home = () => {
  return (
    <>
    <main>
    <Hero/>    
    <Service/>
    <HotelShowCase/>
    <Famous/><Discount/>
    <Gallary/>
    <RestaurantPartner/>
    </main>
    </>
  )
}

export default Home