import React from 'react'
import Categoryproduct from '../components/Categoryproduct'
import SlidingBanner from '../components/SlidingBanner'
import Horizontalwiseproduct from '../components/Horizontalwiseproduct'
import VerticleProducts from '../components/VerticleProducts'

const Home = () => {
  return (
    <div>
      <Categoryproduct/>
      <SlidingBanner/>
      <Horizontalwiseproduct category={"camera"} heading={'TOP airpods'}/>
      <Horizontalwiseproduct category={"camera"} heading={"Popular's Earphones"}/>
      <VerticleProducts category={"camera"} heading={"Best Mobile's"}/>
      <VerticleProducts category={"camera"} heading={" Mouse"}/>
      <VerticleProducts category={"camera"} heading={" Television"}/>
      <VerticleProducts category={"camera"} heading={" camera & Photography"}/>
      <VerticleProducts category={"camera"} heading={"Wired Earphones"}/>
      <VerticleProducts category={"camera"} heading={"primium Bluetooth Speakers"}/>
      <VerticleProducts category={"camera"} heading={"refrigerator"}/>
      <VerticleProducts category={"camera"} heading={"printers"}/>
      <VerticleProducts category={"camera"} heading={"Trimmers"}/>

      
    </div>
  )
}

export default Home