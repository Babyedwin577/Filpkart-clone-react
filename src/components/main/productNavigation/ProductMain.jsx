import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const ProductMain = () => {
    const [productData,setProductData]=useState([])
    const {category,subCategory,subOptions}=useParams()
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
     <div>
      
     </div>
  )
}
