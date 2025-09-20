import React, { useRef, useState } from 'react'
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
    <div>
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
            </div>
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