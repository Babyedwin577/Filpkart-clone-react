import React, { useRef, useState } from 'react'
import bankCards from '../../config/BankOffers'
import { useNavigate } from 'react-router-dom'
import './singlepagess.css'
export const SingleProductPageSS = ({product}) => {
     const selectDiv=useRef()
     const [activeIndex,setActiveIndex]=useState(0)
     const [toggleDrop,setToggleDrop]=useState(true)
     const handleScroll=()=>{
        const {scrollLeft,clientWidth}=selectDiv.current
        const index=Math.round(scrollLeft/clientWidth)
        setActiveIndex(index)
     }
     console.log(activeIndex)
     const disPercent=Math.round(((product.productRealPrice - product.productPrice) / product.productRealPrice) * 100);
     const handleDropbtn=()=>{
        setToggleDrop((prev)=>(!prev))
     }
     const navigate=useNavigate()
     const handleback=()=>{
        navigate(-1)
     }
  return (
    <div style={{paddingBottom:"60px"}}>
        <div className='spss-head-wrap'>
            <div style={{margin:"12px 0 12px 8px",display:"flex"}}>
                <div className='spss-backbtn-wrap' onClick={handleback}>
                    <svg width="24" height="24" fill="none" viewBox="0 0 32 32"><path d="M27 16H5M14 7l-9 9 9 9" stroke="#333333ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <div className='curved-search-wrap'>
                    <div style={{width:"40px",height:"40px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <svg width="24" height="24" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><circle cx="116" cy="116" r="84" fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M175.4 175.4 224 224"></path></svg>
                    </div>
                    <div className='curved-search-txt'>Search for products</div>
                </div>
                <div style={{alignContent:"center",width:"40px",height:"40px",margin:"0 4px"}}>
                    <svg width="24" height="24" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path d="M184 184H69.8L41.9 30.6a8 8 0 0 0-7.8-6.6H16" fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path><circle cx="80" cy="204" r="20" fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle><circle cx="184" cy="204" r="20" fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle><path d="M62.5 144h125.6a15.9 15.9 0 0 0 15.7-13.1L216 64H48" fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path></svg>
                </div>
            </div>
        </div>
        <div className='spss-section-1'>
            <div className='single-image-wrap'
              ref={selectDiv}
              onScroll={handleScroll}
            >
                {
                    product.productPhotoes.map((item,index)=>(
                            <div className='inset-image'>
                               <img src={item} alt="" key={index} />
                            </div>
                    ))
                }
            </div>
            <div className='single-photo-indication'>
             {
                product.productPhotoes.map((_,index)=>(
                    <div className={`single-photo-indi ${activeIndex===index?"single-active":""}`}>
                    </div>
                ))
             }
            </div>
        </div>
        <div className='spss-section-2'>
            <div className='spss-size-head-wrap'>
                <div>Select Size</div>
                <div>Size Chart</div>
            </div>
            <div className='spss-size-list'>
                {
                   product.sizeDetails.split(',').map((size,index)=>(
                      <div key={index} className={`spss-size-items-wrap ${index===0?"spss-size-wrap-alter":""}`}>
                          <div className={`spss-size-txt ${index===0?"spss-size-alter":""}`}>{size}</div>
                      </div>
                   )) 
                }
            </div>
        </div>
        <div className='spss-section-3'>
            <div className='spss-companyname-wrap'>
                <div className=''>{product.brandName}</div>
                <div>Visit Store</div>
            </div>
            <div className='spss-productfull-name'>
                <div>{product.productName}</div>
            </div>
        </div>
        <div className='spss-section-4'>
            {
                product.specialNotation===true&&(
                   <div style={{marginBottom:"8px",background:"linear-gradient(90deg, rgb(138, 44, 156), rgb(93, 0, 118))",width:"fit-content",borderRadius:"4px",height:"22px",display:"flex",alignItems:"center"}}>
                      <div className='spss-special-nota'>{product.specialNotationDes}</div>
                   </div>
                )
            } 
            <div className='spss-price-wrap'>
                <div className='spss-offer-percent'>
                    <svg width="20" height="20" fill="none" viewBox="0 0 12 12"><path d="M6 1.875v8.25M2.625 6.75 6 10.125 9.375 6.75" stroke="#008b37ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <div className='spss-dis-txt'>{disPercent}%</div>
                </div>
                <div className='spss-dis-txt spss-dis-real-alter'>{product.productRealPrice}</div>
                <div className='spss-dis-txt spss-price-alter'>₹{product.productPrice}</div>
            </div>   
        </div>
        <div className='spss-section-5'>
            <div className='wow-deal-wrap'>
                <div className='wowdeal-inner'
                  onClick={handleDropbtn}
                >
                    <svg width="40" height="20" viewBox="0 0 40 20" fill="none"><path d="M.977 19.286c.267.443.746.714 1.263.714h33.067c.688 0 1.283-.476 1.436-1.145a1300.66 1300.66 0 003.223-14.692 1.6 1.6 0 00-.105-.963c-.343-.795-.515-1.447-.891-2.11a89.51 89.51 0 00-20.442 1.022C12.123 3.178 6.468-.237 2.016 1.41 1.464 4.905.66 11.853.011 17.07c-.04.326.03.657.199.94l.767 1.279v-.002z" fill="#0A0A0A"></path><path d="M9.011 9.166c-.549 0-.915 0-1.21-.292-.297-.29-.305-.652-.318-1.199l-.019-1.16c-.222.521-.471 1.1-.75 1.74-.148.336-.255.582-.51.747-.256.166-.51.166-.893.166H4.28c-.542 0-.899 0-1.194-.284-.295-.284-.31-.64-.336-1.179l-.246-5.412c-.025-.585-.044-.972.259-1.287.3-.318.69-.318 1.274-.318h.44c.58 0 .964 0 1.265.31.302.306.291.692.278 1.278 0 0-.023 1.056-.024 1.2.259-.623.528-1.254.794-1.865.147-.34.252-.585.508-.752.255-.165.524-.165.894-.165h.585c.558 0 .926 0 1.225.29.3.294.303.662.314 1.22 0 0 .02 1.01.023 1.26.24-.619.483-1.231.716-1.81.148-.368.244-.613.503-.787.26-.177.52-.177.92-.177h.225c.83 0 1.381 0 1.68.481.303.481.062.973-.3 1.72L11.46 8.303c-.156.32-.269.553-.517.709-.248.156-.492.156-.865.156H9.011v-.002z" fill="#fff"></path><path d="M12.696 1.2c.733 0 1.098 0 1.25.241.15.241-.011.57-.33 1.23l-2.622 5.408c-.136.282-.205.42-.327.498-.124.08-.28.08-.592.08H9.01c-.47 0-.705 0-.853-.147-.149-.147-.154-.378-.164-.846a96.776 96.776 0 01-.01-3.678c0-.01-.009-.019-.016-.019-.008 0-.011.006-.015.01-.423 1.108-1.094 2.67-1.705 4.065-.13.297-.193.443-.321.526-.128.084-.29.084-.613.084h-1.03c-.462 0-.693 0-.842-.14-.146-.141-.157-.374-.178-.833L3.016 2.27c-.023-.5-.032-.753.118-.91.15-.155.4-.157.904-.157h.44c.498 0 .748 0 .9.154.15.154.145.406.132.91-.032 1.385-.045 2.92-.15 4.05 0 .01.007.018.014.018a.018.018 0 00.015-.01c.538-1.37 1.228-3.03 1.869-4.51.127-.297.191-.445.319-.528.128-.084.29-.084.615-.084h.584c.477 0 .716 0 .866.146.149.147.155.386.164.867.026 1.338.062 2.806.023 4.042 0 .01.007.02.018.02a.018.018 0 00.017-.012c.478-1.447 1.141-3.11 1.663-4.42.126-.313.188-.468.318-.555.13-.086.297-.086.633-.086h.226M12.696.178h-.225c-.42 0-.818 0-1.207.264-.285.193-.441.445-.567.72a1.358 1.358 0 00-.346-.546c-.447-.44-.974-.44-1.582-.44h-.585c-.408 0-.793 0-1.176.25-.297.194-.455.45-.585.726A1.39 1.39 0 006.1.635C5.65.173 5.104.173 4.47.173h-.44c-.612 0-1.189 0-1.642.475-.453.476-.426 1.053-.398 1.664l.248 5.408c.024.568.05 1.102.494 1.526.446.425.983.425 1.549.425h1.03c.407 0 .789 0 1.172-.25.31-.201.468-.47.604-.761.067.205.176.397.355.573.447.436.992.436 1.569.436h1.064c.39 0 .76 0 1.133-.235.374-.235.536-.567.707-.919l2.621-5.408c.387-.805.726-1.498.277-2.216C14.36.173 13.59.173 12.695.173v.005z" fill="#0A0A0A"></path><path d="M29.197 9.166c-.549 0-.913 0-1.21-.292-.3-.291-.305-.652-.318-1.195-.007-.389-.011-.776-.017-1.163-.222.52-.473 1.1-.752 1.738-.148.337-.255.583-.51.748-.256.166-.508.166-.892.166h-1.03c-.543 0-.9 0-1.193-.284-.297-.284-.312-.64-.338-1.179l-.244-5.412c-.027-.585-.044-.972.257-1.287.303-.318.69-.318 1.276-.318h.438c.58 0 .964 0 1.265.31.302.306.291.692.28 1.278 0 0-.025 1.056-.026 1.2.26-.623.528-1.255.794-1.865.145-.34.254-.585.508-.752.256-.165.524-.17.895-.17h.586c.556 0 .924 0 1.221.292.3.293.307.662.316 1.222l.023 1.257c.24-.618.483-1.231.714-1.81.148-.368.244-.613.505-.787.262-.177.521-.177.921-.177h.224c.83 0 1.383 0 1.682.481.3.481.06.974-.303 1.72l-2.623 5.412c-.156.322-.269.553-.517.709-.248.156-.492.156-.863.156h-1.069v.002z" fill="#fff"></path><path d="M32.882 1.2c.733 0 1.1 0 1.25.241.15.241-.011.57-.329 1.23l-2.621 5.408c-.138.282-.205.42-.33.498-.123.08-.28.08-.59.08h-1.061c-.47 0-.705 0-.853-.147-.149-.147-.154-.378-.164-.846a105.586 105.586 0 01-.011-3.678c0-.01-.008-.019-.015-.019a.018.018 0 00-.015.01c-.421 1.108-1.094 2.67-1.705 4.065-.13.297-.193.443-.321.526-.128.084-.29.084-.615.084h-1.03c-.462 0-.691 0-.84-.14-.148-.141-.158-.374-.178-.833l-.248-5.409c-.023-.5-.034-.753.118-.91.15-.157.4-.157.904-.157h.44c.498 0 .748 0 .898.154.152.154.147.406.134.91-.034 1.385-.046 2.92-.15 4.05 0 .01.007.018.014.018a.018.018 0 00.015-.01c.538-1.37 1.227-3.03 1.868-4.51.128-.297.192-.445.32-.528.128-.084.291-.084.613-.084h.586c.477 0 .714 0 .862.146.149.147.155.386.164.867.026 1.338.062 2.806.024 4.042 0 .01.008.02.017.02.008 0 .015-.005.02-.012.476-1.447 1.136-3.11 1.662-4.42.124-.313.186-.468.316-.555.132-.086.297-.086.633-.086h.226M32.882.178h-.225c-.42 0-.818 0-1.205.264-.287.193-.443.445-.567.72a1.401 1.401 0 00-.346-.546c-.447-.44-.974-.44-1.58-.44h-.587c-.406 0-.791 0-1.175.25-.296.194-.454.45-.586.73a1.385 1.385 0 00-.321-.517c-.45-.462-.996-.462-1.63-.462h-.44c-.614 0-1.191 0-1.642.475-.453.476-.428 1.053-.4 1.663l.248 5.41c.026.567.052 1.1.496 1.525.445.425.98.425 1.549.425h1.03c.405 0 .789 0 1.172-.25.31-.201.468-.47.603-.761.066.205.177.396.355.573.448.436.991.436 1.57.436h1.062c.39 0 .763 0 1.135-.235.374-.235.534-.568.704-.92l2.622-5.41c.391-.804.728-1.497.277-2.217-.45-.718-1.222-.718-2.117-.718v.005h-.002z" fill="#0A0A0A"></path><path d="M34.749 9.786c-.502 0-.966-.222-1.282-.611a1.626 1.626 0 01-.33-1.374 1.651 1.651 0 011.44-1.3.872.872 0 01-.287-.235l-.023-.03c-.29-.391-.176-.83.014-1.556.105-.4.188-.762.272-1.124.126-.541.256-1.102.453-1.784.113-.39.194-.673.468-.876.273-.204.571-.204.989-.204h.342c.78 0 1.296 0 1.599.44.304.44.133.902-.152 1.668-.14.369-.26.709-.378 1.045-.201.56-.408 1.14-.688 1.85-.139.347-.235.595-.489.772-.276.184-.546.184-.919.184h-.29c.22.105.415.258.574.453.314.385.436.889.331 1.374a1.655 1.655 0 01-1.614 1.31h-.03v-.002z" fill="#fff"></path><path d="M36.799 1.2c.686 0 1.028 0 1.182.22.152.22.03.548-.212 1.2-.369.986-.619 1.757-1.064 2.887-.116.3-.177.449-.304.539-.002 0-.004.006-.01.007-.128.085-.291.085-.618.085-.622 0-.932 0-1.086-.192-.006-.005-.008-.011-.01-.013-.146-.197-.067-.505.096-1.127.261-1.004.398-1.776.722-2.89.096-.341.144-.51.284-.612.135-.101.315-.101.678-.101h.342M34.777 7a1.137 1.137 0 010 2.274h-.028a1.137 1.137 0 110-2.274h.028zM36.799.179h-.342c-.455 0-.883 0-1.295.306-.41.306-.526.712-.648 1.143-.203.695-.333 1.262-.46 1.81-.087.37-.168.717-.27 1.108-.17.66-.313 1.203-.092 1.71a2.174 2.174 0 00-1.058 1.438 2.154 2.154 0 00.438 1.8c.412.51 1.024.801 1.678.801h.029a2.174 2.174 0 002.116-1.718 2.149 2.149 0 00-.243-1.52c.104-.036.207-.086.309-.156l.013-.008.02-.015c.376-.263.515-.62.668-1 .283-.72.49-1.302.691-1.866.12-.336.24-.672.376-1.039.297-.795.553-1.479.094-2.139-.457-.66-1.182-.66-2.02-.66h-.004V.18z" fill="#0A0A0A"></path><path d="M17.498 9.342c-2.094 0-4.33-1.001-4.33-3.81 0-2.499 1.62-5.02 5.242-5.02 3.247 0 4.403 2.067 4.403 3.837v.511h-.024c-.222 2.738-2.25 4.482-5.29 4.482zm-.55-3.766c0 1.03.462 1.03.71 1.03 1.013 0 1.389-1.53 1.389-2.496 0-.838-.376-.908-.73-.908-.967 0-1.37 1.547-1.37 2.374z" fill="#fff"></path><path d="M18.41 1.022c2.672 0 3.892 1.547 3.892 3.33 0 2.464-1.6 4.477-4.802 4.477-2.708 0-3.817-1.509-3.817-3.298 0-2.16 1.38-4.51 4.729-4.51m-1.976 4.557c0 .9.339 1.54 1.222 1.54 1.404 0 1.898-1.803 1.898-3.008 0-.787-.31-1.419-1.239-1.419-1.334 0-1.88 1.786-1.88 2.887zM18.41 0c-2.308 0-3.66.972-4.385 1.79-.881.991-1.368 2.32-1.368 3.743 0 2.088 1.274 4.32 4.841 4.32 3.109 0 5.307-1.76 5.743-4.478h.083V4.35c0-1.207-.447-2.297-1.261-3.071C21.187.444 19.924.002 18.41.002V0zm-.951 5.578c0-.823.404-1.866.858-1.866.085 0 .136.01.158.018.017.03.06.136.06.378 0 .812-.311 1.987-.877 1.987a.362.362 0 01-.115-.013c-.02-.034-.084-.17-.084-.506v.002zm-1.07-.002h-.975 1.332-.357z" fill="#0A0A0A"></path><path d="M3.117 10.611c.04-.17.192-.29.367-.29h3.272c2.43 0 3.625 1.564 3.625 3.269 0 2.659-1.887 4.185-4.755 4.185H2.071a.376.376 0 01-.367-.453L3.05 10.9l.067-.289zm1.447 5.437h1.102c1.398 0 1.952-1.242 1.952-2.443 0-1.024-.398-1.564-1.407-1.564h-.5a.376.376 0 00-.369.299l-.78 3.706.002.002zM17.92 14.663a.378.378 0 01-.337.207h-3.82a.189.189 0 00-.183.15l-.156.754a.187.187 0 00.182.225h2.888c.282 0 .465.299.335.549l-.532 1.024a.38.38 0 01-.334.203h-5.016a.377.377 0 01-.369-.455L12 10.618a.376.376 0 01.368-.296h7.024c.28 0 .46.293.336.543l-.513 1.024a.374.374 0 01-.336.207h-4.524a.19.19 0 00-.184.15l-.126.62a.19.19 0 00.186.226H18.1c.28 0 .463.295.337.545l-.519 1.024v.002zM21.176 16.456s.002 0 .002.002l-.615 1.118a.375.375 0 01-.329.195H18.41a.376.376 0 01-.327-.56l3.766-6.702a.375.375 0 01.327-.191h2.862c.184 0 .342.133.37.315l1.102 6.702a.375.375 0 01-.37.436h-1.822c-.19 0-.35-.14-.374-.327l-.084-.661a.375.375 0 00-.374-.327h-2.31zm2.221-1.769a.19.19 0 00.188-.212 45.624 45.624 0 01-.244-2.44.03.03 0 00-.03-.028.029.029 0 00-.028.019 39.201 39.201 0 01-1.1 2.389.189.189 0 00.17.272h1.044zM28.876 10.322h2.133c.238 0 .417.22.366.453l-1.058 4.997a.188.188 0 00.184.227h3.084c.24 0 .42.224.367.459l-.233 1.024a.377.377 0 01-.367.293h-5.589a.377.377 0 01-.368-.455l1.483-6.997s0-.002-.002-.002z" fill="#fff"></path></svg>
                    <div className='wowdeal-head-txt'>Apply offers for maximum savings</div>
                    <svg width="14" height="14" viewBox="0 0 18 18" fill="none"><path d="M14.75 6L9.125 11.5L3.5 6" stroke="#ffffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <div className='spss-but-at-wrap'>
                    <div className='spss-buy-at-txt'>Buy at ₹{product.productPrice-50}</div>
                </div>
            </div>
            <div className={`letborder ${toggleDrop?"maxUP":"maxDown"}`}>
            <div className='wowdeal-sec2'>
                <div className='wd-part1-wrap'>
                    <div className='add-item-head-wrap'>
                        <div className='add-itemhead-left'>But More Save More</div>
                        <div className='add-itemhead-right'>Add Item</div>
                    </div>
                    <div className='deal-unlock-wrap'>
                        <div className='deal-unlock-icon'>
                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none"><g clip-path="url(#ShoppingBag_a)"><path d="M13.5 3H2.5C2.22386 3 2 3.22386 2 3.5V12.5C2 12.7761 2.22386 13 2.5 13H13.5C13.7761 13 14 12.7761 14 12.5V3.5C14 3.22386 13.7761 3 13.5 3Z" stroke="#333333ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5 5.5C10.5 6.16304 10.2366 6.79893 9.76777 7.26777C9.29893 7.73661 8.66304 8 8 8C7.33696 8 6.70107 7.73661 6.23223 7.26777C5.76339 6.79893 5.5 6.16304 5.5 5.5" stroke="#333333ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="ShoppingBag_a"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>
                        </div>
                        <div className='deal-unlock-sectionwrap'>
                            <div className='unlock-offer-precent'>
                                ₹50 off
                            </div>
                            <div className='how-unlock-head-wrap'>
                                <div>Add 2 items to unlock offer</div>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M10 7L15 12L10 17" stroke="#333333ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                            <div className='blink-image-wrap'>
                              <div className='blink-img-real'>
                                <div className='blink'>
                                    <img src={product.productImage} alt="" />
                                </div>
                              </div>
                            <div className='blink-line'></div>
                            <div className='blink' style={{marginLeft:"6px",border:"1.5px dashed rgb(213, 215, 219)"}}>
                                <svg width="15" height="15" fill="none" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.792 3.135H7.208v4.073H3.135v1.584h4.073v4.073h1.584V8.792h4.073V7.208H8.792V3.135Z" fill="#878787"></path></svg>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='wd-part2-wrap'>
                    <div className='add-item-head-wrap'>
                        <div className='add-itemhead-left'>Bank offers</div>
                    </div>
                    <div className='spss-offercard-wrap'>
                        {
                            bankCards.map((column,index)=>(
                                <div key={index} className='spss-offercard-columnwrap'>
                                  {
                                    column.map((item,idx)=>(
                                        <div key={idx} className='spss-offercard-item'>
                                            <div className='spss-offercard-sec-1'>
                                                <img src={item.cardImage} alt='card-photo' height={24} width={24} />
                                                <div className='bank-cardapply-wrap'>
                                                    <div className='add-item-head-wrap' style={{padding:"0",width:"100%"}}>
                                                        <div className='unlock-offer-precent'>{item.offer}</div>
                                                        <div className='add-itemhead-right'>Apply</div>
                                                    </div>
                                                    <div className='spss-bankcardName'>{item.cardName}</div>
                                                </div>
                                            </div>
                                            <div className='cardType-wrap'>
                                                <div className='add-itemhead-left' style={{color:"#000"}}>{item.cardType}</div>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M10 7L15 12L10 17" stroke="#333333ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            </div>
                                        </div>
                                    ))
                                  }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className='spss-section-6'>
            <div className='spss-delivery-head'>Delivery details</div>
            <div className='spss-set-deliloc-wrap'>
                <div className='spss-setloc-icon'><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M9.08414 13.8688L8.68438 13.4214L8.68438 13.4214L9.08414 13.8688ZM6.91586 13.8688L7.31562 13.4214L6.91586 13.8688ZM12.4 6.75C12.4 8.16783 11.8481 9.50544 11.0906 10.6696C10.3343 11.832 9.39653 12.7851 8.68438 13.4214L9.4839 14.3162C10.2422 13.6387 11.2624 12.606 12.0964 11.3241C12.9292 10.0441 13.6 8.47922 13.6 6.75H12.4ZM11.1113 3.63873C11.9364 4.46389 12.4 5.58305 12.4 6.75H13.6C13.6 5.26479 13.01 3.84041 11.9598 2.7902L11.1113 3.63873ZM8 2.35C9.16695 2.35 10.2861 2.81357 11.1113 3.63873L11.9598 2.7902C10.9096 1.74 9.48521 1.15 8 1.15V2.35ZM4.88873 3.63873C5.71389 2.81357 6.83305 2.35 8 2.35V1.15C6.51479 1.15 5.09041 1.74 4.0402 2.7902L4.88873 3.63873ZM3.6 6.75C3.6 5.58305 4.06357 4.46389 4.88873 3.63873L4.0402 2.7902C2.99 3.84041 2.4 5.26479 2.4 6.75H3.6ZM7.31562 13.4214C6.60347 12.7851 5.66569 11.832 4.90943 10.6696C4.15193 9.50544 3.6 8.16783 3.6 6.75H2.4C2.4 8.47922 3.07077 10.0441 3.90359 11.3241C4.73765 12.606 5.75779 13.6387 6.5161 14.3162L7.31562 13.4214ZM8 13.8964C7.94117 13.8964 7.89717 13.887 7.81199 13.833C7.69818 13.7607 7.56373 13.643 7.31562 13.4214L6.5161 14.3162C6.93321 14.6889 7.34507 15.0964 8 15.0964V13.8964ZM8.68438 13.4214C8.43627 13.643 8.30182 13.7607 8.18801 13.833C8.10283 13.887 8.05883 13.8964 8 13.8964V15.0964C8.65493 15.0964 9.06679 14.6889 9.4839 14.3162L8.68438 13.4214ZM8 9.85C9.71208 9.85 11.1 8.46208 11.1 6.75H9.9C9.9 7.79934 9.04934 8.65 8 8.65V9.85ZM4.9 6.75C4.9 8.46208 6.28792 9.85 8 9.85V8.65C6.95066 8.65 6.1 7.79934 6.1 6.75H4.9ZM8 3.65C6.28792 3.65 4.9 5.03792 4.9 6.75H6.1C6.1 5.70066 6.95066 4.85 8 4.85V3.65ZM11.1 6.75C11.1 5.03792 9.71208 3.65 8 3.65V4.85C9.04934 4.85 9.9 5.70066 9.9 6.75H11.1Z" fill="#333333ff"></path></svg></div>
                <div className='spss-loc-notsetwrap'>Location not set</div>
                <div className='spss-loc-notsetwrap spss-select-loc'>Select delivery location</div>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="#1967f2ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
            <div className='spss-deliverypartner-wrap'>
                <div className='spss-deliverypartner-name-wrap'>
                    <div><svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M4.5 13.054v6.219c0 .192.079.378.22.514.14.136.33.213.53.213h13.5c.199 0 .39-.077.53-.213a.717.717 0 0 0 .22-.514v-6.219M5.063 4h13.875c.162.001.32.053.45.148s.225.228.271.38L21 9.09H3l1.34-4.564a.737.737 0 0 1 .272-.379.775.775 0 0 1 .45-.148v0Z" stroke="#333333ff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 9.09v1.456c0 .771-.316 1.511-.879 2.056A3.048 3.048 0 0 1 6 13.455a3.048 3.048 0 0 1-2.121-.853A2.865 2.865 0 0 1 3 10.546V9.09M15 9.09v1.456c0 .771-.316 1.511-.879 2.056a3.048 3.048 0 0 1-2.121.853 3.048 3.048 0 0 1-2.121-.853A2.865 2.865 0 0 1 9 10.546V9.09M21 9.09v1.456c0 .771-.316 1.511-.879 2.056a3.048 3.048 0 0 1-2.121.853 3.048 3.048 0 0 1-2.122-.853A2.865 2.865 0 0 1 15 10.546V9.09" stroke="#333333ff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                    <div>Fulfilled by HSAtlastradeFashion</div>
                </div>
                <div className='spss-seller-experience-wrap'>
                    <div>{product.starAvg}</div>
                    <div><svg width="12" height="12" viewBox="0 0 24 24" fill="#707070ff"><path d="m12.002 2.588 2.222 6.838h7.19l-5.816 4.227 2.222 6.839-5.818-4.227-5.817 4.227 2.222-6.84L2.59 9.427h7.19z" stroke="#707070ff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                    <div>•</div>
                    <div>3 years with Flipkart</div>
                </div>
            </div>
        </div>
        <div className='spss-lightblue-line'></div>
        <div className='spss-section-7'>
            <div className='three-boxitem-wrap'>
                <div className='three-box-item-inner'>
                    <div className='three-box-columnwrap'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#fafafaff"></rect><path d="M17.6477 27.286C23.4199 27.286 28.0991 22.6068 28.0991 16.8346C28.0991 11.0624 23.4199 6.38318 17.6477 6.38318C11.8755 6.38318 7.19629 11.0624 7.19629 16.8346C7.19629 22.6068 11.8755 27.286 17.6477 27.286Z" fill="#cfebfeff"></path><path d="M26.6586 15.2602C26.6586 9.48807 21.9794 4.80884 16.2072 4.80884C10.4351 4.80884 5.75586 9.48807 5.75586 15.2602C5.75586 21.0323 10.4351 25.7116 16.2072 25.7116C18.4529 25.7116 20.5332 25.0033 22.2369 23.7979" stroke="#0a0a0aff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26.9529 16.6703C26.8206 16.8995 26.7545 17.014 26.6552 17.014C26.556 17.014 26.4898 16.8995 26.3575 16.6703L25.0102 14.3367C24.8779 14.1075 24.8118 13.993 24.8614 13.907C24.911 13.8211 25.0433 13.8211 25.3079 13.8211L28.0025 13.8211C28.2671 13.8211 28.3994 13.8211 28.4491 13.907C28.4987 13.993 28.4325 14.1075 28.3002 14.3367L26.9529 16.6703Z" fill="#0a0a0aff"></path><g clip-path="url(#ReturnPeriod_a)"><path d="M21.4395 11.8779L16.627 9.24467C16.4984 9.17362 16.3539 9.13635 16.207 9.13635C16.0601 9.13635 15.9156 9.17362 15.787 9.24467L10.9745 11.879C10.8371 11.9542 10.7224 12.0649 10.6423 12.1996C10.5623 12.3342 10.5199 12.4879 10.5195 12.6446V17.8749C10.5199 18.0316 10.5623 18.1853 10.6423 18.3199C10.7224 18.4546 10.8371 18.5653 10.9745 18.6405L15.787 21.2748C15.9156 21.3459 16.0601 21.3831 16.207 21.3831C16.3539 21.3831 16.4984 21.3459 16.627 21.2748L21.4395 18.6405C21.577 18.5653 21.6917 18.4546 21.7717 18.3199C21.8518 18.1853 21.8942 18.0316 21.8945 17.8749V12.6451C21.8945 12.4882 21.8522 12.3342 21.7721 12.1992C21.6921 12.0642 21.5772 11.9532 21.4395 11.8779ZM16.207 10.0103L20.6012 12.4165L18.9726 13.3074L14.5784 10.9012L16.207 10.0103ZM16.207 14.8228L11.8129 12.4165L13.6673 11.401L18.0615 13.8072L16.207 14.8228ZM21.0195 17.8771L16.6445 20.2719V15.5791L18.3945 14.6215V16.5728C18.3945 16.6888 18.4406 16.8001 18.5227 16.8822C18.6047 16.9642 18.716 17.0103 18.832 17.0103C18.9481 17.0103 19.0593 16.9642 19.1414 16.8822C19.2234 16.8001 19.2695 16.6888 19.2695 16.5728V14.1425L21.0195 13.1849V17.8749V17.8771Z" fill="#1967f2ff"></path></g><defs><clipPath id="ReturnPeriod_a"><rect width="14" height="14" fill="white" transform="translate(9.20703 8.26025)"></rect></clipPath></defs></svg>
                        <div>10-Days Return</div>
                    </div>
                </div>
            </div>
            <div className='three-boxitem-wrap'>
                <div className='three-box-item-inner'>
                    <div className='three-box-columnwrap'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#fafafaff"></rect><rect x="5.89941" y="10.3398" width="19.5898" height="11.6088" rx="2.5278" fill="#cfebfeff"></rect><path d="M24.038 17.958V13.9443C24.038 11.561 24.038 10.3694 23.2976 9.62905C22.5573 8.88867 21.3657 8.88867 18.9824 8.88867H8.77825C6.39502 8.88867 5.20341 8.88867 4.46303 9.62905C3.72266 10.3694 3.72266 11.561 3.72266 13.9443V15.4419C3.72266 17.8251 3.72266 19.0167 4.46303 19.7571C5.20341 20.4975 6.39502 20.4975 8.77825 20.4975H17.8709H20.4103" stroke="#0a0a0aff" stroke-width="1.2" stroke-linecap="round"></path><path d="M11.8447 13.2661H16.4917" stroke="#1967f2ff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.8447 11.4983H16.4917" stroke="#1967f2ff" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.1517 11.4983C13.6524 11.4983 14.1326 11.6972 14.4866 12.0512C14.8406 12.4053 15.0395 12.8854 15.0395 13.3861C15.0395 13.8868 14.8406 14.367 14.4866 14.721C14.1326 15.0751 13.6524 15.274 13.1517 15.274H11.8447L15.0395 18.1783" stroke="#1967f2ff" stroke-linecap="round" stroke-linejoin="round"></path><g clip-path="url(#NoCOD_a)"><path d="M26.875 16.0703L20.125 22.8203" stroke="#1967f2ff" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"></path><path d="M26.875 22.8203L20.125 16.0703" stroke="#1967f2ff" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"></path></g><defs><clipPath id="NoCOD_a"><rect width="12" height="12" fill="white" transform="translate(17.5 13.4453)"></rect></clipPath></defs></svg>
                        <div>No cash on delivery</div>
                    </div>
                </div>
            </div>
            <div className='three-boxitem-wrap'>
                <div className='three-box-item-inner'>
                    <div className='three-box-columnwrap'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#fafafaff"></rect><path d="M25.7437 24.5112C25.2019 25.6109 21.536 28.5315 19.3098 30.06C18.7356 30.4543 17.9873 30.4545 17.3994 30.081C15.9286 29.1468 14.701 28.2614 13.6765 27.4365C10.4368 24.8278 8.54199 20.7999 8.54199 16.5329V10.9565C8.54199 10.0441 9.20261 9.27192 10.085 9.03998C13.0372 8.26395 15.9034 6.80871 17.3637 6.00154C17.9838 5.65877 18.7415 5.65877 19.3616 6.00154C20.8219 6.80871 23.6881 8.26395 26.6403 9.03998C27.5227 9.27192 28.1833 10.0441 28.1833 10.9565V16.5326C28.1833 19.4244 27.313 22.2064 25.7437 24.5112Z" fill="#cfebfeff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.4737 20.3238H20.082C20.6593 20.3238 21.0717 19.8866 21.2366 18.8374C21.4016 17.8318 21.1954 17.3946 20.5768 17.3946H18.9685L19.216 15.9081C19.5046 14.2031 20.3294 13.3724 21.7315 13.3724H21.9789C22.7624 13.3724 23.1748 13.2412 23.216 12.8477C23.2573 12.5854 23.1748 12.2357 23.1335 11.8422C23.0511 11.4487 22.9686 11.099 22.8449 10.8804C22.6799 10.5306 22.2263 10.3557 21.5665 10.3557C19.917 10.3557 18.5562 10.8366 17.484 11.7985C16.4118 12.7603 15.752 14.0719 15.4221 15.8207L15.1747 17.3946H11.8344C11.7932 17.3946 8.288 17.7881 8.288 17.7881L11.5045 18.3127L11.6282 18.7936L9.69008 18.9685L11.752 19.2746L11.8344 19.668L7.21582 20.0615C7.21582 20.0615 12.3293 20.2801 12.3705 20.2801H14.6798L13.8188 28.0484L17.5302 28.4418L18.4737 20.3238Z" fill="#1967f2ff"></path><path d="M20.2336 26.4695C19.2105 27.289 18.6492 27.7238 17.4376 28.4832C16.8501 28.8514 16.1032 28.8507 15.5168 28.4806C14.0143 27.5322 12.7611 26.6335 11.716 25.7964C8.4249 23.1604 6.5 19.0904 6.5 14.7786V9.12866C6.5 8.2157 7.16143 7.44308 8.04495 7.21311C11.0657 6.42688 14.0011 4.94119 15.4819 4.12585C16.0998 3.78564 16.8533 3.78564 17.4711 4.12585C18.9519 4.94119 21.8874 6.42688 24.9081 7.21311C25.7916 7.44308 26.453 8.21571 26.453 9.12867V14.7784C26.453 17.7005 25.569 20.5115 23.9747 22.8405" stroke="#0a0a0aff" stroke-width="1.2" stroke-linecap="round"></path></svg>
                        <div>Filpkart Assured</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='spss-lightblue-line'></div>
        <div className='spss-section-8'>
           <div className='spss-product-hight-wrap'>
            <div className=''>Product highlights</div>
            <div>Key features, specifications and more</div>
           </div>
           <div className='spss-highlight-arrow-wrap'>
            <svg width="16" height="16" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m208 96-80 80-80-80"></path></svg>
           </div>
        </div>
        <div className='spss-lightblue-line'></div>
        <div className='spss-section-9'>
           <div className='spss-product-hight-wrap'>
            <div className=''>All details</div>
            <div>Features, description and more</div>
           </div>
           <div className='spss-highlight-arrow-wrap'>
            <svg width="16" height="16" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m208 96-80 80-80-80"></path></svg>
           </div>
        </div>
        <div className='fix'>
            <div className='bottom-fix-bt-wrap'>
                <div className='bottom-fix-left-btn'>
                    <div>Add to Cart</div>
                </div>
                <div className='bottom-fix-left-btn bottom-bt-fixalter'>
                    <div>But at ₹{product.productPrice}</div>
                </div>
            </div>
        </div>
    </div>
  )
}