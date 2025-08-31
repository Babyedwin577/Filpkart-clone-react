import React, { useState } from 'react'
import { DropDown } from './DropDown'
export const NavItems = ({index,item,hasDropDown,dropdownData}) => {
  const [open,setOpen]=useState(false)
  const [subActiveIndex,setSubActiveIndex]=useState(0)
   const [hoveredIndex,setHoveredIndex]=useState(0)
  return (
    <div className={`des-item-wrap ${index===0?'change':''}`}
    onMouseEnter={()=>{
      hasDropDown&&setOpen(true)
      hasDropDown&&setHoveredIndex(index)
    }}
    onMouseLeave={()=>{
      setOpen(false)
      setSubActiveIndex(0)
      setHoveredIndex(0)
    }}
    >
      <div className='des-scroll-inner'>
        <div className='des-scroll-img'>
          <img
           src={item.image}
           alt={item.title} 
          />
        </div>
        <div className={`des-scroll-font ${hasDropDown?"with-arrow":""}`}>
          <h1>{item.name}</h1>
        </div>
          {hasDropDown&&open&&(
          <DropDown
           data={dropdownData}
           setSubActiveIndex={setSubActiveIndex}
           subActiveIndex={subActiveIndex}
           hoveredIndex={hoveredIndex}
          />
        )}  
      </div> 
    </div>
  )
}
