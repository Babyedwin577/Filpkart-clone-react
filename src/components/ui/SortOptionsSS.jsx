import React from 'react'
import '../../styles/sortoptionss.css'
export const SortOptionsSS = ({sortType,setSortType,setSortToggle}) => {
    const handleClick=(type)=>{
        setSortType(type)
        setSortToggle(false)
    }
  return (
    <div className='ss-sort-wrap'>
       <div className='sortBy-title'>SORT BY</div>
       <div style={{height:"1px",background:"rgb(234, 234, 234)",marginBottom:"12px"}}></div>
       <div className='popularity-wrap-ss' onClick={()=>handleClick('popularity')}>
          <div className='popularity-head-inner'>Popularity</div>
          <div className='bullet-wrap'>
            {
            sortType==="popularity"?(
                <img src="https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7c0ab296-0784-44d3-be1b-7aaa4c36d990.png?q=60" height={16} width={16} alt="bullet" />
            ):
            (
                <img src="https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7b036604-c843-4bb5-af27-7c675bf60f67.png?q=60" height={16} width={16} alt="bullet" />
            )
            }
          </div>
       </div>
       <div className='popularity-wrap-ss' onClick={()=>handleClick('lowTohigh')}>
          <div className='popularity-head-inner'>Price -- Low to High</div>
          <div className='bullet-wrap'>
            {
            sortType==="lowToHigh"?(
                <img src="https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7c0ab296-0784-44d3-be1b-7aaa4c36d990.png?q=60" height={16} width={16} alt="bullet" />
            ):
            (
                <img src="https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7b036604-c843-4bb5-af27-7c675bf60f67.png?q=60" height={16} width={16} alt="bullet" />
            )
            }
          </div>
       </div>
       <div className='popularity-wrap-ss' onClick={()=>handleClick('highTolow')}>
          <div className='popularity-head-inner'>Price -- High to Low</div>
          <div className='bullet-wrap'>
            {
            sortType==="highTolow"?(
                <img src="https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7c0ab296-0784-44d3-be1b-7aaa4c36d990.png?q=60" height={16} width={16} alt="bullet" />
            ):
            (
                <img src="https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7b036604-c843-4bb5-af27-7c675bf60f67.png?q=60" height={16} width={16} alt="bullet" />
            )
            }
          </div>
       </div>
       <div className='popularity-wrap-ss' onClick={()=>handleClick('newest')}>
          <div className='popularity-head-inner'>Newest</div>
          <div className='bullet-wrap'>
            {
            sortType==="newest"?(
                <img src="https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7c0ab296-0784-44d3-be1b-7aaa4c36d990.png?q=60" height={16} width={16} alt="bullet" />
            ):
            (
                <img src="https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7b036604-c843-4bb5-af27-7c675bf60f67.png?q=60" height={16} width={16} alt="bullet" />
            )
            }
          </div>
       </div>
    </div>
  )
}