import React from 'react'
import '../../styles/sectioncard3.css'
export const SectionCard3 = ({image,name,des}) => {
  return (
    <div className='topdeals-item-wrapper'>
        <img
            src={image}
            alt={name} 
        />
        <div className='topdeals-deswrap'>
            <h1>{name}</h1>
            <p>{des}</p>
        </div>
    </div>
  )
}
