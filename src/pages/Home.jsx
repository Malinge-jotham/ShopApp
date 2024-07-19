import React from 'react'

import Navbar from '../components/Navbar'
import Annoucemments from '../components/Annoucemments'
import Slider from '../components/Slider'
function Home() {
  return (
    <div>
        <Annoucemments/>
      <Navbar/>
      <Slider/>
    </div>
  )
}

export default Home
