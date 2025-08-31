import React, { useEffect, useState } from 'react'
import './mobileMain.css'
export const Sponsored = () => {
    const [images,setImages]=useState([])
    useEffect(()=>{
       fetch("./data/product.json")
       .then((response)=>{
        return response.json()
       })
       .then((img)=>{
        return setImages(img.sponsored)
       })
    },[])
  return (
    <div className='sponsored-wrapper'>
        <div style={{width:'100%',display:"flex",flexDirection:"column"}}>
            <div className='sponsored-head'>
            <h1>Sponsored</h1>
        </div>
        <div className='sponsored-list'>
            {
                images.length>0?(
                    images.map((item,index)=>(
                         <div className='sponsored-img' key={index}>
                            <img
                             src={item}
                             alt={`Sponsored ${index}`} 
                            />
                         </div>
                    ))
                ):(
                    <p>Unable to fetch</p>
                )
            }
        </div>
        </div>
    </div>
  )
}