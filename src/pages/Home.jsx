import React from 'react'

import Navbar from '../components/Navbar'
import Annoucemments from '../components/Annoucemments'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
function Home() {
  return (
    <div>
        <Annoucemments/>
      <Navbar/>
      <Slider/>
      <Categories/>
    </div>
  )
}

export default Home
