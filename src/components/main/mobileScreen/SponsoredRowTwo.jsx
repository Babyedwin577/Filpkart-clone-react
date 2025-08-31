import React,{useState,useEffect} from 'react'
import './mobileMain.css'
export const SponsoredRowTwo = () => {
 const [images,setImages]=useState([])
    useEffect(()=>{
       fetch("./data/product.json")
       .then((response)=>{
        return response.json()
       })
       .then((img)=>{
        return setImages(img.sponsored2)
       })
    },[])
  return (
        <div className='sponsored-list'>
            {
                images.length>0?(
                    images.map((item,index)=>(
                         <div className='sponsored-img' key={index}>
                            <img
                             src={item}
                             alt={`Sponsored ${index}`} 
                            />
                         </div>
                    ))
                ):(
                    <p>Unable to fetch</p>
                )
            }
        </div>
  )
}