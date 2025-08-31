import React from 'react'
import Header from '../components/header/Header'
import { SliderRender } from '../components/silder/SliderRender'
import { MainRender } from '../components/main/MainRender'
import { Footer } from '../components/footer/Footer'
export const Home = () => {
  return (
          <>
           <Header/>
           <SliderRender/>
           <MainRender/>
           <Footer/>
          </>
  )
}
