import React from 'react'
import '../../styles/threeProducts.css'
export const ThreeCards = ({image,productName,productDescreption}) => {
  return (
      <div className='des-pro-item-wrap'>
        <div className='des-pro-item-inner'>
                <div className='des'>
                    <img className='' src={image} alt={productName} />
                    <div className='des-pro-details'>
                        <p className='des-pro-name'>{productName}</p>
                        <p className='des-pro-offer'>{productDescreption}</p>
                    </div>
                </div>
            </div>
        </div>
  )
}