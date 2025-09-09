import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ProductCardLargeScreen } from '../../ui/ProductCardLargeScreen'
import { Explantion } from '../../ui/Explantion'
import './productMain.css'
export const ProductMain = ({filters}) => {
    const [productData,setProductData]=useState([])
    const [sortType,setSortType]=useState('popularity')
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
        return Object.entries(filters).every(([key,values])=>{
            if(values.length===0) return true
             const productKeyForFilter={
                   gender:'gender',
                   brand:"brandName",
                   color:"color",
                   fabric:"fabric"
             }
             const productKey=product[productKeyForFilter[key]]
             return values.includes(productKey)
        })&&
        product.productCategory.toLowerCase()===category?.toLowerCase()&&
        (!subCategory||product.productRightCategory.toLowerCase()===subCategory?.toLowerCase())&&
        (!subOptions||subOptions.toLowerCase()==='all'||product.productLeftCategory.toLowerCase()===subOptions?.toLowerCase())
    })
    const sortProducts=[...filteredProduct].sort((a,b)=>{
        switch(sortType){
            case "popularity":
                return b.popularity-a.popularity
            case "lowTohigh":
                return a.productPrice-b.productPrice
            case "highTolow":
                return b.productPrice-a.productPrice
            case "newest":
                return new Date(b.createdAt)-new Date(a.createdAt)
            default:
                return 0
        }
    })
  return (
     <div style={{background:"#fff", width:"100%", minWidth:"682px"}}>
        <Explantion 
        secondpart={secondpart}
        sortType={sortType}
        setSortType={setSortType}
        />
        <div className='product-wrapping'>
        {
            sortProducts.map((item,index)=>(
                <ProductCardLargeScreen
                key={index}
                item={item}
                />
            ))
        }
        </div>
     </div>
  )
}


//    const filteredProduct=productData.filter((product)=>{
//         return(
//             product.productCategory.toLowerCase()===category?.toLowerCase()&&
//             (!subCategory||product.productRightCategory.toLowerCase()===subCategory?.toLowerCase())&&
//             (!subOptions||subOptions.toLowerCase()==='all'||product.productLeftCategory.toLowerCase()===subOptions?.toLowerCase())
//         )
//     })







