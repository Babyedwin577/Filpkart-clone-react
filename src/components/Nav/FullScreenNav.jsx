import React from 'react'
import '../../styles/fullsn.css'
import {useFilters} from '../../hooks/UseFilter'
import filterOptions from '../../config/FilterConfig'
export const FullScreenNav = ({filters,setFilters,setFilterToggle}) => {
  const [activeKey,setActiveKey]=React.useState('gender')
  const {
    handleChange,
    clearAll,
  }=useFilters(filters,setFilters)
  const hasActiveFilters = Object.values(filters).some(
  value => Array.isArray(value) && value.length > 0
);
  return (
    <div>
      <div className='full-sn-head'>
         <div className='sn-backbtn' onClick={()=>(setFilterToggle((prev=>!prev)))}>
          <svg width="19" height="16" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg"><path d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>
         </div>
         <div className='sn-head-wrap'>
          <h1>Filters</h1>
          {hasActiveFilters&&(
            <button onClick={clearAll}>Clear Filters</button>
          )}
         </div>
      </div>
      <div className='sn-filterMenu-wrapper'>
         <div className='sn-filterMenu-leftSection'>
           {filterOptions.map((item,index)=>(
            <div className={`sn-filterMenu-leftItems`}
             key={index}
             onClick={()=>{setActiveKey(item.key)}}
             >
                <div className={` sn-filterMenu-leftItems-head ${activeKey===item.key&&'active-leftitem-sn'}`}>{item.title.charAt(0).toUpperCase() + item.title.slice(1).toLowerCase()}</div>
            </div>
           ))}
         </div>
         <div className='sn-filterMenu-rightSection'>
            {
              activeKey&&(
                filterOptions.find(option=>option.key===activeKey)
                ?.options.map((opt,i)=>(
                  <label htmlFor="" className='opt-sn-wrap'>
                    <input
                           type="checkbox"
                           onChange={()=>handleChange(activeKey,opt)}
                           checked={filters[activeKey].includes(opt)}
                           className='opt-sn-input'
                    />
                    {
                      filters[activeKey].includes(opt)?
                      (
                        <img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/checked-b672f083.png" alt="checked"  width={18} height={18}/>
                      ):(
                        <img src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/unchecked-58d79d4f.png" width={18} height={18} alt="unchecked" />
                      )
                    }
                   
                    <span className='option-text'>{opt}</span>
                  </label>
                ))
              )
            }
         </div>
      </div>
      <div style={{position:"fixed",bottom:"0",height:"56px",background:"#fff",width:"100%"}}>
          <div style={{margin:"8px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
              <div className='count-ss-total'>196,240</div>
              <div className='caption-ss'>products found</div>
            </div>
            <div className='applybtn-wrap' onClick={()=>setFilterToggle((prev)=>!prev)}>
              <div>Apply</div>
            </div>
          </div>
      </div>
    </div>
  )
}









