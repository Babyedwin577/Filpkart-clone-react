import React from 'react'
import '../../styles/productcardsmallsc.css'
export const ProductCardSmallerScreen = ({item}) => {
      const discountPercent = Math.round(((item.productRealPrice - item.productPrice) / item.productRealPrice) * 100);
  return (
    <div className=''>
        <div className='ss-product-card-inner'>
          <div className='ss-image-wrapp'>
             <div className='ss-image-wrapp-additional'>
                <img src={item.productImage} alt="" />
             </div>
             <div className='wishList-Pluswrap'>
                 <div className='wishList-Plusinner'>
                  <img src="https://rukminim2.flixcart.com/www/40/40/promos/30/06/2025/ca99011a-0436-4c4c-a3e6-3a5d6ef01f75.png?q=60" alt="whislist icon" />
                 </div>
             </div>
             {
                  item.ad===true&&(
                    <div className='ad-wrapper-ss'>AD</div>
                  ) 
              }
              <div className='rating-box'>
                <div className='rating-box-inner'>
                 <div className='realRateing'>{item.starAvg}</div>
                 <img src="https://rukminim2.flixcart.com/www/24/24/promos/15/12/2024/a72b6403-9a02-41f8-b683-a78d9f54a61e.png?q=60" height={12} width={12} alt="" />
                 <div className='totalRate'>{item.totalRating}</div>
                 </div>
              </div>
          </div>
          <div>
          </div>
          <div className='details-wrap-ss'>
            <div className='brandName-ss-wrap'>
              {
                item.assured&&(
                  <img src="https://rukminim2.flixcart.com/www/112/36/promos/15/07/2025/c928f731-3c2f-4e8f-b696-dc96e3545cb8.png?q=60" alt="" />
                )
              }
              <div className='brandName-ss'>{item.brandName}</div>
            </div>
            <div className='productName-ss'>{item.productName}</div>
            <div className='price-wrap-pt alter-price-wrap'>
                <div className='offer-wrapss'>
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none"><path d="M6.73461 1V8.46236L9.5535 5.63352L10.5876 6.65767L5.99384 11.2415L1.41003 6.65767L2.42424 5.63352L5.25307 8.46236V1H6.73461Z" fill="#4BB550"></path></svg>
                  <div className='offer-percentage-wrap' style={{margin:"0"}}>{`${discountPercent}%`}</div>
                </div>
                <div className='orginalprice-wrap alter-dis-price'>{`₹${item.productRealPrice}`}</div>
                <div className='dis-price alter-dis-price'>{`₹${item.productPrice}`}</div>
            </div>
            <div style={{marginTop:'4px'}}>
              { 
                    item.specialNotation===true?(
                         <div
                           className={`specialNotationDes special-nott-alter
                             ${item.specialNotationDes === "Big Billion Days Price" ? "" : "differ-back"} 
                             ${typeof item.specialNotationDes === "string" && item.specialNotationDes.toLowerCase().includes("only") ? "only-style" : ""} 
                             ${typeof item.specialNotationDes === "string" && item.specialNotationDes.toLowerCase().includes("%") ? "percentage-style" : ""}
                         `}>
                            <span 
                            className={`specialNotationDesfont 
                            ${item.specialNotationDes==="Big Billion Days Price"?"":"differ-font"}
                            ${typeof item.specialNotationDes === "string" && item.specialNotationDes.toLowerCase().includes("only") ? "only-style" : ""} 
                            `}>{item.specialNotationDes}</span>
                         </div>
                    ):null
                }
                </div>
          </div>
        </div>
    </div>
  )
}








