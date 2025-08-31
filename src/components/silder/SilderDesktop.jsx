import React, { useEffect, useRef, useState } from 'react'
import '../../styles/silder.css'
export const DesktopSlider = () => {
    const [images,setImages]=useState([])
    const intervalCount=useRef(null)
    const selectDiv=useRef(null)
    const [currentIndex,setCurrentIndex]=useState(0)
    useEffect(()=>{
       fetch('/data/product.json')
       .then((response)=>{
        return response.json()
       })
       .then((images)=>{
        return setImages(images.silderDesktop)
       })
    },[])
    useEffect(()=>{
         intervalCount.current=setInterval(()=>{
            setCurrentIndex((prev)=>{
               const nextIndex=(prev+1)%images.length
                 if(nextIndex===0){
                    scrollSlide(nextIndex,false)
                 }
                 else{
                    scrollSlide(nextIndex,true)
                 }
               return nextIndex
            })
         },3000)
         return ()=>clearInterval(intervalCount.current)
    },[images])
    const scrollSlide=(index,value=true)=>{
       if(selectDiv.current){
        const width=selectDiv.current.clientWidth
        selectDiv.current.scrollTo({
              left:width*index,
              behavior:value?'smooth':'auto'
        })
       }
    }
    const handleManualScroll=()=>{
      const manualScroll=selectDiv.current.scrollLeft;
      const width=selectDiv.current.clientWidth;
      const index=Math.round(manualScroll/width)
      setCurrentIndex(index)
    }
  return (
    <div className='des-silder-wrap'>
       <div className='des-silder-inner'>
          <div className='des-slide' ref={selectDiv} onScroll={handleManualScroll}>
            {
                images.map((item,index)=>(
                   <div className='des-slider-item' key={index}>
                      <img
                       src={item}
                       alt={`Slider ${index}`}
                       className='des-slider-img'
                      />
                   </div>
                ))
            }
          </div>
          <div className='des-progress-wrapper'>
            {
               images.length>0?(
                  images.map((_,index)=>(
                     <span key={index}
                     className={`des-progress-dot ${index===currentIndex?'active':''}`}
                     ></span>
                  ))
               ):(
                  <p>Unable to fetch!!!!!!</p>
               )
            }
          </div>
       </div>
    </div>
  )
}
