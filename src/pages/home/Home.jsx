import React from 'react'
import Hero from '../../components/sections/Hero'
import Service from '../../components/sections/Service'
import HotelShowCase from '../../components/sections/HoteShowCase'
import Famous from '../../components/sections/Famous'

const Home = () => {
  return (
    <>
    <main>
    <Hero/>    
    <Service/>
    <HotelShowCase/>
    <Famous/>
    </main>
    </>
  )
}

export default Home