import React,{useState} from 'react'
import filterOptions from '../../config/FilterConfig'
import { PriceSection } from '../ui/PriceSection'
import '../../styles/sidenav.css'

export const ProductSideNav = ({filters,setFilters}) => {
const [expandedCategories,setExpandedCategories]=useState({})
const [searchQurey,setSearchQurey]=useState(({
  brand:'',
  color:''
}))
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
  const clearAll = () => {
    const cleared = Object.keys(filters).reduce((acc, key) => {
      acc[key] = [];
      return acc;
    }, {});
    setFilters(cleared);
  };

  const removeFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].filter((item) => item !== value),
    }));
  };
console.log(expandedCategories)
console.log(filters)
  return (
    <div className='sidenav-main'>
        <div className='sidenav-inner'>
             <div className='selected-filters'>
              <div className='selected-head-wrap'>
                <div className='selected-head'>Filters</div>
                <div className='selected-clear' onClick={clearAll}>clear all</div>
              </div>
              <div className='selected-list-wrap'>
                <div className='selected-list-inner'>
                {
                  Object.entries(filters).map(([key,values])=>
                   values.length>0?(
                    values.map((item,index)=>(
                      <div className='selectedlist-itemwrap' key={index}>
                      <div onClick={()=>{removeFilter(key,item)}}>✕</div>
                      <div>{item}</div>
                    </div>
                    ))
                   ):null
                  )
                }
                </div>
              </div>
             </div>
             <div className='pathdetail-wrap'>
                <div>categories</div>
                <div className='main-category-wrap'>
                  <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="IZmjtf"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="P3pAQJ"></path></svg>
                  <a href="https://www.flipkart.com/clothing-and-accessories/pr?sid=clo&p[]=facets.ideal_for%255B%255D%3DMen&p[]=facets.ideal_for%255B%255D%3DMen&otracker=categorytree">Clothing and Accessories</a>
                </div>
                <div className='main-sub-wrap'>
                  <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="IZmjtf zyl78N"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" className='svgfortop'></path></svg>
                  <a href="https://www.flipkart.com/clothing-and-accessories/topwear/pr?sid=clo,ash&p[]=facets.ideal_for%255B%255D%3DMen&p[]=facets.ideal_for%255B%255D%3DMen&otracker=categorytree">Topwear</a>
                </div>
                <div className='ajiad'>
                  <div className='shirts'>Shirts</div>
                  <div className='shirts'>T-Shirts</div>
                </div>
             </div>
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