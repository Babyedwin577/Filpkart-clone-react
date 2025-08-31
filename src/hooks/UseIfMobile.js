import { useEffect, useState } from 'react'
export const UseIfMobile = () => {
      const [isMobile,setIsMobile]=useState(window.innerWidth<768)
      useEffect(()=>{
        const handleChange=()=>{
            setIsMobile(window.innerWidth<768)
        }
        window.addEventListener('resize',handleChange)
        return ()=>window.removeEventListener('resize',handleChange)
      },[])
      return isMobile
}
