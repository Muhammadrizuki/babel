import React from 'react'

import Destination from "./Destination"
import Hero from "./Hero"
import Info from "./Info"
import Maps from "./Maps"
import Navbar from "./Navbar"
import Pack from "./Pack"
import Product from "./Product"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Destination />
        <Info />
        <Product />
        <Maps />
        <Pack />
    </div>
  )
}

export default Home