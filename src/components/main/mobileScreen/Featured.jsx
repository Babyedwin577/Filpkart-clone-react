import React,{useState,useEffect} from 'react'
import './mobileMain.css'
export const Featured = () => {
    const [images,setImages]=useState([])
    useEffect(()=>{
      fetch('/data/product.json')
      .then((response)=>{
        console.log(response)
          return response.json()
      })
      .then((data)=>{
         return setImages(data.featured)
      })
    },[])
    console.log(images)
  return (
    <div>
        <div className='title-wrapper featured-font'>Featured Brands</div>
        <div className='Brand-wrapper'>
            <div className='brand-scroll-wrapper'>
                {
                   images.length>0?
                   images.map((item,index)=>(
                     <div className='featured-img' key={index}>
                     <img src={item.image} alt="item.id" />
                   </div>
                   ))
                   :
                   <p>failed to fetch</p>
                }
            </div>
        </div>
    </div>
  )
}