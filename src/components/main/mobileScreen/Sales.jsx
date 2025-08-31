import React, { useEffect, useState } from 'react'
import './mobileMain.css'
export const Sales = () => {
    const [images,setImages]=useState([])
    useEffect(()=>{
        fetch("/data/product.json")
        .then((response)=>{return response.json()})
        .then((img)=>{
            return setImages(img.sales1)
        })
    },[])
    console.log(images)
  return (
    <div>
    <div>
        <div className='sales-wrapper'>
           <img src="https://rukminim2.flixcart.com/fk-p-flap/920/380/image/3df1696950041878.jpg?q=60" className='sales-img' alt="" />
             <div className='sales-header fonts-sales'>Lowest prices guarnateed</div>
             <div className='sale-product'>
              {
                images.length>0?
                 images.map((item,index)=>(
                    <div className='sales-img-wrap' key={index}>
                      <img className='sales-img height' src={item.image} alt={`${item.id} images`} />
                    </div>
                 )):
                 <p>Unable to view images</p>
              }
             </div>
        </div>
    </div>
    </div>
  )
}