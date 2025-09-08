import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Explantion } from '../../ui/Explantion'
export const ProductMain = () => {
    const [productData,setProductData]=useState([])
    const {category,subCategory,subOptions}=useParams()
    const {pathname}=useLocation()
    const filteredurl=pathname.split("/").filter(Boolean)
    const decordurl=filteredurl.map((p)=>decodeURIComponent(p))
    const secondpart=decordurl[1]
    console.log(secondpart)
    useEffect(()=>{
        fetch('/data/ProductCard.json')
        .then((data)=>data.json())
        .then((data)=>setProductData(data))
        .catch((err)=>console.error(`Error Fetching JSON:`,err))
    },[])
    console.log(productData)
    console.log(category)
    console.log(subCategory)
    console.log(subOptions)
    const filteredProduct=productData.filter((product)=>{
        return(
            product.productCategory.toLowerCase()===category?.toLowerCase()&&
            (!subCategory||product.productRightCategory.toLowerCase()===subCategory?.toLowerCase())&&
            (!subOptions||subOptions.toLowerCase()==='all'||product.productLeftCategory.toLowerCase()===subOptions?.toLowerCase())
        )
    })
    console.log(filteredProduct)
  return (
     <div style={{background:"#fff", width:"100%", minWidth:"682px"}}>
        <Explantion secondpart={secondpart}/>
     </div>
  )
}
