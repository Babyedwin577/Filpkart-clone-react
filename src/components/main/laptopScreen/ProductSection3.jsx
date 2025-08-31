import React, { useEffect, useState } from 'react'
import { SectionCard3 } from '../../ui/SectionCard3'
export const ProductSection3 = ({data,title}) => {
    const [img,setImg]=useState([])
    useEffect(()=>{
        fetch('/data/product.json')
        .then((data)=>data.json())
        .then((response)=>setImg(response[data]))
    },[data])
  return (
    <div className='top-deals-wrap'>
       <div className='top-deals-inner'>
        <h1>{title}</h1>
        <div className='top-deals-scrollwrapper'>
            {
                img.length>0?(
                    img.map((item,index)=>(
                      <SectionCard3
                      key={index}
                      name={item.name}
                      image={item.image}
                      des={item.des}
                      />
                    ))
                ):(
                    <p>Unable to fetch!!!!</p>
                )
            }  
            
        </div>
       </div>
    </div>
  )
}

