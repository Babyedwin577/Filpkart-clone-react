import React from 'react'
import '../../styles/topdealscard.css'
export const TopDealCard = ({dealImage,dealName,dealDescription}) => {
  return (
    <div className='specialsale-items'>
                    <div className='specialsale-items-inner'>
                        <div className='s-i-w'>
                            <div className='Special-sale-addition'>
                               <div className='S-sale-img'>
                                 <img src={dealImage} alt={dealName}  />
                               </div>
                            <div className='Special-item-des'>
                                <h1>{dealName}</h1>
                                <p>{dealDescription}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}
