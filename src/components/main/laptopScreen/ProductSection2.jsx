import React, { useEffect, useState } from 'react'
import { TopDealCard } from '../../ui/TopDealCard'
import './laptopMain.css'
export const TopDeals = ({objectName,title}) => {
    const [img,setImg]=useState([])
    useEffect(()=>{
        fetch('./data/product.json')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>setImg(data[objectName]))
    },[objectName])
  return (
    <div className='des-special-sale-wrapper'>
        <div className='specialSale-inner'>
        <div className='specialSale-head'>
          <h1>{title}</h1>
          <div className='specialSale-nextbutton'>
            <svg width="16" height="16" fill="none" viewBox="0 0 17 17"><path d="m6.627 3.749 5 5-5 5" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>
        </div>
        <div className='specialsale-items-wrap'>
           {
            img.length>0?(
              img.map((item,index)=>(
                <TopDealCard 
                  key={index}
                  dealImage={item.image}
                  dealName={item.name}
                  dealDescription={item.des}
                />
              )) 
            ):
            (
                <p>Unable to fetch!!!!!</p>
            )
           }
        </div>
        </div>
    </div>
  )
}
