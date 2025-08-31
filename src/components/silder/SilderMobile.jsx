import {useEffect, useRef, useState } from "react"
import React from 'react'
import '../../styles/silder.css'

export const Silder = () => {
  const [images,setImages]=useState([])
  const [currentIndex,setCurrentIndex]=useState(0)
  const containerRef=useRef(null)
  const intervelRef=useRef(null)
useEffect(()=>{
  fetch('/data/silder.json')
  .then((response)=>{
    return response.json()
  })
  .then((images)=>{
      return setImages(images)
  })
},[])
useEffect(()=>{
  if(images.length>0){
    intervelRef.current=setInterval(()=>{
       setCurrentIndex((prev)=>{
            const nextIndex=(prev+1)%images.length
            if(nextIndex===0){
              scrollToSlide(nextIndex,false)
            }
            else{
              scrollToSlide(nextIndex,true)
            }
            return nextIndex
       })
       return () => clearInterval(intervelRef.current)
    },3000)
  }
},[images])
const scrollToSlide=(index,smooth=true)=>{
    if(containerRef.current){
      const width=containerRef.current.offsetWidth;
       containerRef.current.scrollTo({
        left:width*index,
        behavior:smooth?'smooth':'auto'
       })
    }
}
const handleScroll=(()=>{
  const manualScroll=containerRef.current.scrollLeft;
  const width=containerRef.current.offsetWidth
  const index=Math.round(manualScroll/width)
  setCurrentIndex(index)
})
  return (
    <div className="slider-main">
      <div
      className="silder-container"
      ref={containerRef}
      onScroll={handleScroll}>
        {
          images.length>0?(
            images.map((item,index)=>(
                <div className="silder-item" key={index}>
                    <img 
                      src={item}
                      alt={`Slide ${index}`}
                      className="silder-image"
                    />
                </div>
            ))
          ):(
            <p>Loading.....</p>
          )
        }
      </div>
      <div className="progress-bar">
        {
          images.map((_,index)=>(
            <span
            className={`progress-dot ${index===currentIndex? 'active':''}`}
            >
            </span>
          ))
        }
      </div>
    </div>
  )
}