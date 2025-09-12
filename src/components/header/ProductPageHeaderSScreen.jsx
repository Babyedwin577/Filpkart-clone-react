import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/smallscreenproductpage.css'
export const ProductPageHeaderSScreen = ({filterToggle,setFilterToggle}) => {
    const[readMore,setReadmore]=useState(false)

    const handleReadMore=()=>{
        setReadmore((prev)=>!prev)
    }
    const handleFilterToggle=()=>setFilterToggle((prev)=>!prev)
    console.log(readMore)
    console.log(filterToggle)
  return (
    <div>
        <div className='s-pro-pageheader-wrap'>
            <Link to='/' className='backbtn'>
                <svg width="19" height="16" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg"><path d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>
            </Link>
            <Link to='/' className='backbtn widthchangebt'>
              <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-ea579c.png" alt="filpkartlogo" />
            </Link>
            <div className='Topwear-wrap'>
                <span>Topwear</span>
            </div>
            <Link to='/' className='backbtn search-wid'>
            <svg height="30" viewBox="0 0 32 32" width="30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.0012 0H0.0012207V32H32.0012V0Z"></path><path d="M15.0012 21.9999C18.8671 21.9999 22.0011 18.8659 22.0011 14.9999C22.0011 11.134 18.8671 8 15.0012 8C11.1352 8 8.00122 11.134 8.00122 14.9999C8.00122 18.8659 11.1352 21.9999 15.0012 21.9999Z" stroke="#111112" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.9524 19.95L24.0024 24" stroke="#111112" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </Link>
            <Link to='/' className='backbtn search-wid'>
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 23H8.56185C8.32766 23 8.1009 22.9178 7.9211 22.7678C7.7413 22.6177 7.61987 22.4093 7.57797 22.1789L4.2402 3.82112C4.19831 3.5907 4.07688 3.3823 3.89708 3.23225C3.71728 3.08219 3.49052 3 3.25633 3H1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 28C10.3807 28 11.5 26.8807 11.5 25.5C11.5 24.1193 10.3807 23 9 23C7.61929 23 6.5 24.1193 6.5 25.5C6.5 26.8807 7.61929 28 9 28Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24 28C25.3807 28 26.5 26.8807 26.5 25.5C26.5 24.1193 25.3807 23 24 23C22.6193 23 21.5 24.1193 21.5 25.5C21.5 26.8807 22.6193 28 24 28Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 8H26.8018C26.9483 8 27.0929 8.03218 27.2256 8.09425C27.3583 8.15633 27.4757 8.2468 27.5695 8.35925C27.6634 8.4717 27.7314 8.6034 27.7687 8.74504C27.8061 8.88667 27.8119 9.03478 27.7857 9.17889L26.1493 18.1789C26.1074 18.4093 25.986 18.6177 25.8062 18.7678C25.6264 18.9178 25.3996 19 25.1654 19H7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </Link>
            <Link to='/' className='backbtn login-wid'>
            <span>Login</span>
            </Link>
        </div> 
        <div className='filter-sort-wrap'>
             <div className='sortBtn-wrap'>
                <svg width="20" height="20" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="m144 168 40 40 40-40M184 112v96M48 128h72M48 64h136M48 192h56"></path></svg>
                <div className='sort-txt'>Sort</div>
             </div>
             <div style={{height:"16px",width:"1px",background:"rgba(213,215,219,1.00)"}}></div>
             <div className='sortBtn-wrap' onClick={handleFilterToggle}>
                <div className='filtercount'>
                   <svg width="20" height="20" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M148 172H40M216 172h-28"></path><circle cx="168" cy="172" r="20" fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle><path fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M84 84H40M216 84h-92"></path><circle cx="104" cy="84" r="20" fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle></svg> 
                   <div>1</div>
                </div>
                <div className='sort-txt'>Filter</div>
             </div>
        </div>
        <div className='transition-contents-wrap'>
            <div className='inner-transition-wrapper'>
                <div className='transtion-itemwrapper'>
                    <div className='transtion-inner-item'>
                        <img src="https://rukminim2.flixcart.com/www/64/64/promos/06/09/2025/93a87a70-8232-4e99-b279-c4a6b1fc6e46.png?q=60" alt="billion" />
                        <span>Price Live</span>
                    </div>
                </div>
                <div className='transtion-itemwrapper'>
                    <div className='transtion-inner-item'>
                        <img src="https://rukminim2.flixcart.com/www/64/64/promos/20/09/2023/c21bda20-718d-465b-a220-89814366b293.jpeg?" alt="billion" />
                        <span>Popular Brands</span>
                    </div>
                </div>
                <div className='transtion-itemwrapper'>
                    <div className='transtion-inner-item'>
                        <img src="https://rukminim2.flixcart.com/www/64/64/promos/08/08/2025/8c0a1816-096e-44a2-836d-a0e472b4a0d4.png?q=60" alt="billion" />
                        <span>Latest Trends</span>
                    </div>
                </div>
                <div className='transtion-itemwrapper'>
                    <div className='transtion-inner-item'>
                        <img src="https://rukminim2.flixcart.com/www/64/64/promos/08/08/2025/54535d93-bc01-41d6-8ae8-a1cbf16a337f.png?q=60" alt="billion" />
                        <span>Top Rated</span>
                    </div>
                </div>
            </div>
        </div>
        <div className={`textt-wrap ${readMore&&"white-spaceChange"}`}>
            <div className={`large-words ${readMore&&"white-spaceChange"}`}>
                <p>If you want to stay on top of the fashion trends, then you need to shop for the latest and trendiest <b>topwear</b>  from an e-commerce site Flipkart. Check out the amazing collection of topwear for women online and select the ones that suit you the best. Browse through stylish women’s topwear that are offered by popular brands, such as Only, Jockey, U&F, Darzi, Ann Springs, and more. Women can style a trendy </p>
            </div>
            <div className='nilla-readmore' onClick={handleReadMore}>{readMore?"See less":"Read More"}</div>
        </div>
        <div className='borderline'></div>
    </div>
  )
}