import React from 'react'
import Header from '../components/Header'
import '../styles/global.css'
import Image from "../images/banner.png"
import Gridimages from "../components/Gridimages"


export default function index() {
  return (
    <div>
      <Header />
      <div>
      <img src={Image} class="lg:w-[1350px] lg:h-[400px] lg:m-10 lg:pt-10"></img>
    </div>
    <div>
    <Gridimages />
    </div>
    </div>
  )
}
