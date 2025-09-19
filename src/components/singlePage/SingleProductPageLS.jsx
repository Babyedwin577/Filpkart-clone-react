import React, { useState } from 'react'
import { Review } from '../ui/Review'
import { ScrollCard } from '../ui/ScrollCard'
import './singlepageLS.css'
export const SingleProductPageLS = ({product}) => {
  const [fullOffers,setFullOffers]=useState(false)
  const [hoveredPhoto,setHoveredPhoto]=useState(product?.productPhotoes?.[0]||"")
  const discountPercent = Math.round(((product.productRealPrice - product.productPrice) / product.productRealPrice) * 100);
  const randomVal = Math.floor(Math.random() * 1001);
  const path=['Home','Clothing and Accessories','Topwear','Shirts',"Men's Shirts","Casual Shirts",product.brandName,product.productName]
  const offers=[
    "Bank Offer 10% Off on supermoney UPI. Max discount of ₹50. Minimum order value of ₹250.",
    "Bank Offer 5% cashback on Filpkart SBI Credit Card upto ₹4,000 per calender quaters",
    "Bank Offer 5% cashback on Axis Bank Filpkart Debit Card",
    "Combo Offer Buy 2 items save 5%; Buy 3 save 7%; Buy 4+ save 10%",
    "Special Price Get extra 19% off (price inclusive of cashback/coupon)",
    "No Cost EMI on Bajaj Finserv EMI Card",
    "Bank Offer 5% cashback on Filpkart SBI Credit Card upto ₹4,000 per calender quaters",
    "Bank Offer 5% cashback on Filpkart SBI Credit Card upto ₹4,000 per calender quaters",
    "Bank Offer 5% cashback on Filpkart SBI Credit Card upto ₹4,000 per calender quaters",
    "Bank Offer 5% cashback on Filpkart SBI Credit Card upto ₹4,000 per calender quaters",
    "Bank Offer 5% cashback on Filpkart SBI Credit Card upto ₹4,000 per calender quaters",
    "Bank Offer 5% cashback on Filpkart SBI Credit Card upto ₹4,000 per calender quaters",
    "Bank Offer 5% cashback on Filpkart SBI Credit Card upto ₹4,000 per calender quaters",
    "Bank Offer 5% cashback on Filpkart SBI Credit Card upto ₹4,000 per calender quaters",
    "Bank Offer 5% cashback on Filpkart SBI Credit Card upto ₹4,000 per calender quaters",
  ]
  console.log("single Main Page rendered")
  const toggleOffers=fullOffers?offers:offers.slice(0,4);
  return (
    <div className='head-wrap-sls'>
    <div className='wrapper-Sls'>
      <div className='flex-wrap-Sls'>
        <div className='thumbnails-wrapper'>
          <div className='thumbnail'>
            <div className='thumbnail-left'>
              <ul className='thumbnail-left-inner'>
                {
                  product.productPhotoes.map((photo,index)=>(
                    <li key={index} className={`thumbnail-small-cards ${hoveredPhoto===photo?"thumbnail-border":""}`}
                      onMouseEnter={()=>setHoveredPhoto(photo)}
                    >
                      <img src={photo} alt="ivedem varum" className='thumbnail-image'/>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className='thumbnail-right'>
              <div className='largeImage-right'>
                <img src={hoveredPhoto} alt="veluth varum"/>
              </div>
              <div className='thumbnail-wishlist-wrap'>
                <svg xmlns="http://www.w3.org/2000/svg" class="N1bADF" width="24" height="24" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#000000" class="x1UMqG" stroke="transparent" fill-rule="evenodd" opacity=".2"></path></svg>
              </div>
            </div>
          </div>
        <div style={{width:"100%",marginTop:"12px"}}>
          <div style={{display:"flex",flexWrap:"wrap",width:"100%",alignItems:"center",gap:"8px"}}>
            <div style={{width:"48%",padding:"18px 8px",background:"#ff9f00",cursor:"pointer",borderRadius:"2px",boxShadow:"0 1px 2px 0 rgba(0, 0, 0, .2)"}}>
              <div className='cart-bt-wrapperlsa'>
                  <svg class="NwyjNT" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path class="" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
                  <div>add to cart</div>
              </div>
            </div>
            <div style={{width:"50%",padding:"18px 8px",background:"#fb641b",cursor:"pointer",borderRadius:"2px",boxShadow:"0 1px 2px 0 rgba(0, 0, 0, .2)"}}>
              <div className='cart-bt-wrapperlsa'>
                  <span className='energy'></span>
                  <div>buy now</div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className='product-detailwrap-sls'>
          <div className='section-1-wrap'>
            <div className='section1-pathwrap'>
              {
                path.map((item,index)=>(
                  <div className='pathName-wrap' key={index}>
                    <div className='pathName-items'>{item}</div>
                    <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" class="wMLTcO"></path></svg>
                  </div>
                ))
              }
            </div>
            <div className='Share-wrap'>
                <div style={{paddingLeft:"6px"}}>
                      <svg xmlns="http://www.w3.org/2000/svg"  class="jWKn+i"><path d="M14.78 5.883L9.032 0v3.362C3.284 4.202.822 8.404 0 12.606 2.053 9.666 4.927 8.32 9.032 8.32v3.446l5.748-5.883z" class="g9gS7K"  fill-rule="evenodd"></path></svg>
                      <span>Share</span>
                </div>
              </div>
          </div>
          <div className='section-2-wrap' style={{width:"100%"}}>
            <h1>{product.brandName}</h1>
            <span>{product.productName}</span>
            <div className='pacha-notation'>Special price</div>
            <div className='sls-price-wrap'>
              <div>
                <div className='sls-price'>{product.productPrice}</div>
                <div className='sls-realprice'>{`₹${product.productRealPrice}`}</div>
                <div className='sls-dis'>{`${discountPercent}% off`}</div>
                <div className='question-icon'>i</div>
              </div>
              <div className='i-icon-wrap'>
                {/* <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="dhBD+z"><defs><circle id="b" cx="8" cy="8" r="8"></circle><filter id="a" width="130%" height="130%" x="-15%" y="-8.8%" filterUnits="objectBoundingBox"><feMorphology in="SourceAlpha" operator="dilate" radius=".4" result="shadowSpreadOuter1"></feMorphology><feOffset dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"></feGaussianBlur><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g transform="translate(2 1)"><use fill="#000" filter="url(#a)" xlink:href="#b"></use><use fill="#FCFCFC" stroke="#000" stroke-opacity=".3" stroke-width=".8" xlink:href="#b"></use></g><text fill="#1D1D1D" font-family="Roboto-Medium, Roboto" font-size="11" font-weight="400" opacity=".59" transform="translate(2 1)"><tspan x="6.6" y="12.2">i</tspan></text></g></svg> */}
              </div>
            </div>
            <div className='sls-ratings-wrap'>
               <div className='sls-rating-inner'>
                <div className='sls-star-rating'><div style={{display:"inline-block"}}>{product.starAvg}</div>
                 <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" alt="★" width={13} height={12} style={{margin:"2px 0 0 2px"}}/>
                </div>
                 <div className='sls-rating-total'>{`${product.totalRating} ratings and ${randomVal} reviews`}</div>
                 {
                  product.assured===true?(
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png" alt="" className='sls-assure' height={18} width={60}/>
                  ):null
                 }
               </div>
            </div>
          </div>
          <div className='section-3-wrap'>
            <div className='sls-sizehead'>Size</div>
            {
              product.sizeDetails.split(',').map((size,index)=>(
                <div key={index} className='sls-sizeitem-wrap'>
                  <div className={`sls-size ${index===0&&'special-sls-size'}`}>{size}</div>
                </div>
              ))
            }
            <div className='size-chart-wrap'>
              <div className='size-charthead'>Size Chart</div>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIxMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMyODc0RjAiIHN0cm9rZS13aWR0aD0iMS4zIj48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0zNy4zNS42NUguNjV2MTAuN2gzNi43Vi42NXoiLz48cGF0aCBmaWxsPSIjODc4Nzg3IiBkPSJNNi42NSA4LjY1aDF2Mi43aC0xem00LTNIMTFsLS4zNS0uMzVWNWwtLjE1LjE1LS4xNS0uMTV2LjNsLS4zNS4zNWguMzV2NS43SDEwbC4zNS4zNXYuM2wuMTUtLjE1LjE1LjE1di0uM2wuMzUtLjM1aC0uMzV2LTUuN3ptNSAzSDE2bC0uMzUtLjM1VjhsLS4xNS4xNS0uMTUtLjE1di4zbC0uMzUuMzVoLjM1djIuN0gxNWwuMzUuMzV2LjNsLjE1LS4xNS4xNS4xNXYtLjNsLjM1LS4zNWgtLjM1di0yLjd6bTQtM2gxdjUuN2gtMXptNCAzaDF2Mi43aC0xem05IDBoMXYyLjdoLTF6bS00LTNoMXY1LjdoLTF6Ii8+PC9nPjwvc3ZnPg==" alt="" height={10} />
            </div>
          </div>
          <div className='section-4-wrap' style={{width:"100%",height:"auto"}}>
              <div className='sls-offers-wrap'>Available Offers</div>
              {
                toggleOffers.map((item,index)=>(
                  <div key={index} className='sls-offers-item'>
                     <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" height={18} width={18} alt="" style={{marginRight:"4px"}}/>
                     <div className='sls-offer'>{item}</div>
                     <div className='terms-and-condtions'>T&C</div>
                  </div>
                ))
              }
              {console.log(toggleOffers.length)}
              {
                toggleOffers.length<=4&&(
                  <button
                   onClick={()=>setFullOffers(true)}
                   className='show-full-btn'
                  >{`+${offers.length-4} more offers`}</button>
                )
              }
          </div>
          <div className='section-5-wrap' style={{width:"100%",display:"flex"}}>
            <div className='delivery-section-wrap'>
              <div style={{display:"flex",width:"fit-content",alignItems:"center"}}>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg==" height={18} width={18} alt="" />
                <div className='deliver-sls'>Deliver to</div>
              </div>
              <div className='address-wrapp'>
                <input type="text" placeholder='Enter delivery pincode' />
                <div className='delivery-check'>Check</div>
              </div>
              <div style={{margin:"10px 0px 0px 2px"}}>
                <div className='delivery-date'>Delivery by 30 Sep,Sunday</div>
                <div className='caution-wrap'>if ordered before 1:15 PM</div>
                <div className='sls-viewmore-inaddress'>View Details</div>
              </div>
            </div>
            <div className='service-section'>
              <div className='service-head'>Services</div>
              <div className='cash-on-delivery-wrap'>
                <div className='css-image'></div>
                <div className='cash-on-delivery-txt'>Cash on Delivery available</div>
              </div>
            </div>
          </div>
          <div className='section-6-wrap' >
            <div className='specification-wrap'>
              <div className='specification-head'>Specification</div>
              <img src="https://rukminim2.flixcart.com/image/400/400/cms-product/bbf8d309f06e47839c5211c4c116dfd3_164b7001f47_ShirtCropped.jpg.jpeg?q=50" alt="" height={16} width={16}/>
              <div className='specification-head fit-wrap'>Fits:</div>
              <div className='specification-head fit-wrap tail'>Tailored</div>
              <div className='lin tail'>|</div>
              <div style={{margin:'0'}} className='specification-head fit-wrap'>Size:</div>
              <div className='specification-head fit-wrap tail'>L</div>
            </div>
            <div className='seller-sls-wrap'>
              <div className='specification-head'>Seller</div>
              <div>
                <div className='blue-seller'>HSAtlastradeFashion</div>
                <div className='sls-star-rating seller-star'><div style={{display:"inline-block"}}>{product.starAvg}</div>
                 <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" alt="★" width={13} height={12} style={{margin:"2px 0 0 2px"}}/>
                </div>
                <div className='return-policy-wrap'>
                  <div className='return-txt'>10 days return policy</div>
                  <div className='question-icon'>?</div>
                </div>
                <div className='seemore-seller'>See other sellers</div>
              </div>
            </div>
            <div className='section-7-wrap'>
              <div className='sec-7-txt'>Product Details</div>
              <div className='sec7img'>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCI+PHBhdGggZmlsbD0iIzg3ODc4NyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQgOEg4djZINlY4SDBWNmg2VjBoMnY2aDZ6Ii8+PC9zdmc+" alt="" height={14} width={14} />
              </div>
            </div>
            <div className='section-8-wrap'>
              <Review
                productName={product.productName}
                totalRating={product.totalRating}
                starAvg={product.starAvg}
                randomVal={randomVal}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <ScrollCard/>
    </div>
  </div>
  )
}