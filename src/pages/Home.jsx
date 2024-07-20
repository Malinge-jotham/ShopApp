import React from 'react'

import Navbar from '../components/Navbar'
import Annoucemments from '../components/Annoucemments'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
//import Product from '../components/Product'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
function Home() {
  return (
    <div>
        <Annoucemments/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <NewsLetter/>
      <Footer />
    </div>
  )
}

export default Home
