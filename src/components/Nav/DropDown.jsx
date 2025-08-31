import React from 'react'

export const DropDown = ({data,subActiveIndex,setSubActiveIndex,hoveredIndex}) => {
  return (
    <div className={`scroll-dropdown ${hoveredIndex===7?"top-change":""}`}> 
      <div className='scroll-dropdown-left'>
        {
          data.map((menu,i)=>(
             <div
              className={`dropleft-items ${i===subActiveIndex?"slotActive":""}`}
              onMouseEnter={()=>{setSubActiveIndex(i)}}
             >
               {menu.title}
             </div>
          ))
        }
      </div>
      
        {data[subActiveIndex]?.subOptions?.length>0?(
          <div className='scroll-dropdown-right'>
            {data[subActiveIndex].subOptions.map((sub,index)=>(
            <div className={`dropright-items ${index===0?'right-first':""}`} key={sub.title}>{sub.title}</div>
        ))}
          </div>
        ):(
           null 
        )
        }
    </div>
  )
}
