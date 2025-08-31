import React, { useEffect, useState } from 'react'
import { ThreeCards } from '../../ui/ThreeCards'
import './laptopMain.css'
export const ProductSection1 = ({objectName, title}) => {
    const [productData, setProductData] = useState([])
    useEffect(() => {
        fetch('/data/product.json')
        .then((response) => response.json())
        .then((data) => setProductData(data[objectName]))
    }, [objectName])
  return (
    <div>
       <div className='des-pro-wrapper'>
        <div className='des-pro-inner'>
            <div className='des-pro-head'>
                <h1>{title}</h1>
            </div>
            <div className='des-pro-scroll-wrapper'>
                <div className='des-pro-scroll'>
                    {
                        productData.map((item,index)=>(
                           <ThreeCards
                             key={index}
                             image={item.image}
                             productName={item.name}
                             productDescreption={item.descreption}
                           />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}