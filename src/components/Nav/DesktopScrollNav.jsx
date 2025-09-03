import React, { useEffect, useState } from 'react'
import { NavItems } from './NavItems'
import '../../styles/desktopNav.css'
export const DesktopScroll = () => {
 const [images,setImages]=useState([])
 const [fashion,setFashion]=useState([])
 const [electro,setElectro]=useState([])
 const [furniture,setFurniture]=useState([])
 const [beauty,setBeauty]=useState([])
 useEffect(()=>{
  fetch('./data/product.json')
  .then((response)=>response.json())
  .then((data)=>{
    setImages(data.scrollnav)
    setFashion(data.fashionMenus)
    setElectro(data.electronicsNav)
    setFurniture(data.HomeFurnishing)
    setBeauty(data.BeautyPersonal)
  })
 },[])
 const dropdownMapping={
  2:fashion,
  3:electro,
  4:furniture,
  7:beauty
 }
 console.log(fashion)
 console.log(images)
  return (
    <div className='margin-wrap'>
       <div className='des-main-wrapper'>
         <div className='des-scroll-wrapper'>
            {
              images.map((item,index)=>{
                const dropdownData=dropdownMapping[index]||null
                return (
                <NavItems
                 key={index}
                 index={index}
                 item={item}
                 hasDropDown={Boolean(dropdownData)}
                 dropdownData={dropdownData}
                />
                )
                })
            }
         </div>
       </div>
    </div>
  )
}
