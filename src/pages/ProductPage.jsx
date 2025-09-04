import React, { useState } from 'react'
import { ProductMain } from '../components/main/productNavigation/ProductMain'
import { ProductPageHeader } from '../components/header/ProductPageHeader'
import { ProductPageNav } from '../components/Nav/ProductPageNav'
import { ProductSideNav } from '../components/Nav/ProductSideNav'
export const ProductPage = () => {
const [filters,setFilters]=useState({
  gender:[],
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
  availability:[]
})
  return (
    <div style={{paddingTop:"56px"}}>
      <ProductPageHeader/>
      <ProductPageNav/>

      <div style={{padding:"8px",display:'flex'}}>
        <ProductSideNav 
         filters={filters}
         setFilters={setFilters}
        />
        <ProductMain/>
      </div>
    </div>
  )
}