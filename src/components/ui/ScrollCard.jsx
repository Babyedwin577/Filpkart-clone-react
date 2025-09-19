import React, { useEffect, useRef,useState } from 'react'
import '../singlePage/singlepageLS.css'
import btnBanner from '../../config/SlideBanner'    
export const ScrollCard = () => {
    const scrollRef=useRef()
    const[showLeft,setShowLeft]=useState(false)
    const[showRight,setShowRight]=useState(true)
    const checkScroll=()=>{
        if(!scrollRef.current) return;
        const {clientWidth,scrollLeft,scrollWidth}=scrollRef.current
        setShowLeft(scrollLeft>0)
        setShowRight(scrollLeft+clientWidth<scrollWidth-5)
    }
    useEffect(()=>{
        checkScroll()
        const el=scrollRef.current
        if(el){
            el.addEventListener("scroll",checkScroll)
            return ()=>el.removeEventListener("scroll",checkScroll)
            }
    },[])
    const handleLeftclick=()=>{
        scrollRef.current.scrollBy({left:-480,behavior:'smooth'})
    }
    const handleRightlcick=()=>{
        console.log("clicked")
        scrollRef.current.scrollBy({left:480,behavior:'smooth'})
    }
    console.log(showLeft)
    console.log(showRight)
  return (
    <div style={{background:"#f5f5f5"}}>
    <div style={{width:"100%",position:"relative"}}>
    <div className='scroll-cardbanner-wrap'>
        <img src="https://rukminim2.flixcart.com/www/2000/2000/promos/01/12/2018/8aa01ab4-de88-4a46-9d93-5c7f3ebac2df.png?q=50" alt=""  />
    </div>
    </div>
    <div className='button-scroll-wrap'>
        <div style={{background:"#fff"}}>
            <div className='h'>You might be interested in</div>
            <div style={{margin:"0 32px",position:"relative"}}>
                <div style={{width:"100%",marginBottom:"32px"}}>
                <div className='btn-scroll-inner' ref={scrollRef}>
                   {
                    btnBanner.map((item,index)=>(
                        <div className='btn-card' key={index}>
                            <div className='btn-ban-flex'>
                            <div className='btn-scroll-image-wrap'>
                                <div className='aspect-box'>
                                    <div className='aspect-box-inner'>
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                </div>
                            </div>
                            <div className='btn-card-infowrap'>
                                <div>{item.name}</div>
                                <div>{item.offer}</div>
                                <div>Shop Now</div>
                            </div>
                            </div>
                        </div>
                    ))
                   }
                </div>
                </div>
                <div className={`overflow-btn-left-wrap ${showLeft?"visiblebtn":"novisiblebtn"}`}>
                     <div className='overflow-arrow' onClick={handleLeftclick}>
                        <svg width="14.6" height="24" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="nOYZ40"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#212121" class="eIkYmX"></path></svg>
                     </div>
                </div>
                <div className={`overflow-btn-right-wrap ${showRight?"visiblebtn":"novisiblebtn"}`}>
                     <div className='overflow-arrow-right' onClick={handleRightlcick}>
                        <svg width="14.6" height="24" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="nOYZ40"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#212121" class="eIkYmX"></path></svg>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}
