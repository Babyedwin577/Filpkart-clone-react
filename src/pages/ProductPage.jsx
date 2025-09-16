import React, { useState , useEffect, useMemo, useCallback} from 'react'
import { ProductMain } from '../components/main/productNavigation/ProductMain'
import  ProductPageHeader  from '../components/header/ProductPageHeader'
import  ProductPageNav  from '../components/Nav/ProductPageNav'
import { ProductSideNav } from '../components/Nav/ProductSideNav'
import { Footer } from '../components/footer/Footer'
import { UseIfMobile } from '../hooks/UseIfMobile'
export const ProductPage = () => {
const [productData,setProductData]=useState([])

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
    useEffect(()=>{
        fetch('/data/ProductCard.json')
        .then((data)=>data.json())
        .then((data)=>setProductData(data))
        .catch((err)=>console.error(`Error Fetching JSON:`,err))
    },[])
    const filtersMemo =useMemo(()=>filters,[filters])
    const handleSetFilters = useCallback((newFilters) => setFilters(newFilters), [])
  return (
    isMobile?(
      <>
        <ProductMain
            filters={filtersMemo}
            setFilters={handleSetFilters}
            productData={productData}
        />
      </>
    ):(
      <div style={{paddingTop:"56px"}}>
      <ProductPageHeader/>
      <ProductPageNav/>

      <div style={{padding:"8px",display:'flex'}}>
        <ProductSideNav 
         filters={filtersMemo}
         setFilters={handleSetFilters}
        />
        <ProductMain
         filters={filtersMemo}
         productData={productData}
        />
      </div>
     <Footer/>
    </div>
    )
  )
}

























































































