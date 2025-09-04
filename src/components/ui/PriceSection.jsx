import React from 'react'
import '../../styles/pricesection.css'
export const PriceSection = () => {
  return (
    <>
    <div className='priceoption-wrap'>
                          <div className='priceoption-head'>
                               <h1>price</h1>
                          </div>
                          <div className='price-boxes-wrap'>
                            <div className='price-boxes'></div>
                            <div className='price-boxes'></div>
                            <div className='price-boxes'></div>
                            <div className='price-boxes'></div>
                            <div className='price-boxes'></div>
                          </div>
                          <div>
                            <div className='price-line-wrap'>
                              <div className='priceline-sidedot'>
                                <div className='pricelinedot-inner'></div>
                              </div>
                              <div className='priceline-sidedot change-align-dot'>
                                <div className='pricelinedot-inner'></div>
                              </div>
                              <div className='lineee'></div>
                              <div className='price-smalldot-wrap'>
                                <div className='price-smalldot'>.</div>
                                <div className='price-smalldot'>.</div>
                                <div className='price-smalldot'>.</div>
                                <div className='price-smalldot'>.</div>
                                <div className='price-smalldot'>.</div>
                                <div className='price-smalldot width-change'>.</div>
                              </div>
                            </div>
                          </div>
                          <div className='price-options-wrap'>
                            <select className='price-min-wrap'>
                              <option value="">Min</option>
                              <option value="">₹300</option>
                              <option value="">₹500</option>
                              <option value="">₹700</option>
                              <option value="">₹1000</option>
                            </select>
                            <div className='to'>to</div>
                            <select className='price-min-wrap'>
                              <option value="">₹1000+</option>
                              <option value="">₹1000</option>
                              <option value="">₹700</option>
                              <option value="">₹500</option>
                              <option value="">₹300</option>
                            </select>
                          </div>
    </div>
    </>
  )
}





