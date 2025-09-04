import React,{useState} from 'react'
import filterOptions from '../../config/FilterConfig'
import { PriceSection } from '../ui/PriceSection'
import '../../styles/sidenav.css'

export const ProductSideNav = ({filters,setFilters}) => {
const [expandedCategories,setExpandedCategories]=useState({})
const toggleCategory=(key)=>{
  setExpandedCategories((prev)=>({
    ...prev,
    [key]:!prev[key]
  }))
}
const handleChange=(key,option)=>{
  console.log("clicked")
    setFilters((prev)=>{
      const activeAlready=prev[key].includes(option)
      return {
        ...prev,
        [key]:activeAlready?
        prev[key].filter((item)=>item!==option):
        [...prev[key],option]
      }
    }
    )
}
console.log(expandedCategories)
console.log(filters)
const specialIndexArray=[1,2,3,4,6,7,8]
  return (
    <div className='sidenav-main'>
        <div className='sidenav-inner'>
          {
            filterOptions.map((item,index)=>(
              <>
              {
                      index===10&&(
                        <PriceSection/>
                      )
                    }
              <div className='sidenav-options-wrap' key={index}>
                  <div
                   className='options-side-head-wrap'
                   onClick={()=>toggleCategory(item.key)}
                   >
                    <div className='options-h1'>{item.title}</div>
                    <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="ukzDZP"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" class="SV+H35"></path></svg>
                  </div>
                  {
                    expandedCategories[item.key]&&(
                      <div className='expandedside-wrap'>
                        {
                          item.options.map((data,index)=>(
                            <label htmlFor="" className='label-expandable' key={index}>
                          <input
                           type="checkbox"
                           onChange={()=>handleChange(item.key,data)}
                           checked={filters[item.key].includes(data)}
                           className='input-karo-bhai'
                          />
                           <span className='option-ticked'></span> 
                          <span className='option-text'>{data}</span>
                        </label>
                          ))
                        }
                      </div>
                    )
                  }
              </div>
              </>
            ))
          }
        </div>
    </div>
  )
}