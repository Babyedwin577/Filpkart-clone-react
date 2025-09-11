import React, { useState } from 'react'
import { ProductMain } from '../components/main/productNavigation/ProductMain'
import { ProductPageHeader } from '../components/header/ProductPageHeader'
import { ProductPageNav } from '../components/Nav/ProductPageNav'
import { ProductSideNav } from '../components/Nav/ProductSideNav'
import { Footer } from '../components/footer/Footer'
import { UseIfMobile } from '../hooks/UseIfMobile'
export const ProductPage = () => {
const [filters,setFilters]=useState({
  gender:['Men'],
  brand:[],
  color:[],
  fabric:[],
  type:[],
  fit:[],
  pattern:[],
  size:[],
  occasion:[],
  collar:[],
  customerratings:[],
  discount:[],
  offers:[],
  newarrivals:[],
  availability:[],
  priceMin:0,
  priceMax:Infinity,
})
const isMobile=UseIfMobile()
  return (
    isMobile?(
      <>
        <ProductMain
            filters={filters}
        />
      </>
    ):(
      <div style={{paddingTop:"56px"}}>
      <ProductPageHeader/>
      <ProductPageNav/>

      <div style={{padding:"8px",display:'flex'}}>
        <ProductSideNav 
         filters={filters}
         setFilters={setFilters}
        />
        <ProductMain
         filters={filters}
        />
      </div>
     <Footer/>
    </div>
    )
  )
}




