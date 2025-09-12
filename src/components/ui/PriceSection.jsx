import React, { useState, useEffect } from 'react'
import '../../styles/pricesection.css'
  const steps = [0, 300, 500, 700, 1000, Infinity]
export const PriceSection = ({ filters, setFilters }) => {
  const [minIndex, setMinIndex] = useState(0)
  const [maxIndex, setMaxIndex] = useState(steps.length - 1)
  const [showClear, setShowClear] = useState(false)
  useEffect(() => {
    const minIdx = steps.indexOf(filters.priceMin)
    const maxIdx = steps.indexOf(filters.priceMax)

    if (minIdx !== -1) setMinIndex(minIdx)
    if (maxIdx !== -1) setMaxIndex(maxIdx)
    setShowClear(!(filters.priceMin === steps[0] && filters.priceMax === steps[steps.length - 1]))
  }, [filters.priceMin, filters.priceMax])

  const min = steps[minIndex]
  const max = steps[maxIndex]

  const handleMinChange = (e) => {
    const idx = Number(e.target.value)
    if (idx < maxIndex) {
      setMinIndex(idx)
      setFilters((prev) => ({ ...prev, priceMin: steps[idx] }))
    }
  }

  const handleMaxChange = (e) => {
    const idx = Number(e.target.value)
    if (idx > minIndex) {
      setMaxIndex(idx)
      setFilters((prev) => ({ ...prev, priceMax: steps[idx] }))
    }
  }

  const handleSelectMin = (e) => {
    const val = Number(e.target.value)
    const idx = steps.indexOf(val)
    if (idx !== -1 && idx < maxIndex) {
      setMinIndex(idx)
      setFilters((prev) => ({ ...prev, priceMin: val }))
    }
  }

  const handleSelectMax = (e) => {
    const val = Number(e.target.value)
    const idx = steps.indexOf(val)
    if (idx !== -1 && idx > minIndex) {
      setMaxIndex(idx)
      setFilters((prev) => ({ ...prev, priceMax: val }))
    }
  }
  const handleClear = () => {
    setMinIndex(0)
    setMaxIndex(steps.length - 1)
    setFilters((prev) => ({ ...prev, priceMin: steps[0], priceMax: steps[steps.length - 1] }))
    setShowClear(false)
  }
  const totalRange = steps.length - 1
  const leftPercent = (minIndex / totalRange) * 100
  const rightPercent = ((totalRange - maxIndex) / totalRange) * 100
  const lineWidth = 100 - leftPercent - rightPercent

  return (
    <div className='priceoption-wrap'>
      <div className='priceoption-head'>
        <h1>price</h1>
        {
          showClear&&(
            <button 
            className='clear-price-btn'
            onClick={handleClear}
            >Clear</button>
          )
        }
      </div>
      <div className='price-boxes-wrap'>
          <div className='price-boxes'></div>
          <div className='price-boxes'></div>
          <div className='price-boxes'></div>
          <div className='price-boxes'></div>
          <div className='price-boxes'></div>
        </div>
      <div className='price-line-wrap'>
        <div className='lineee-background'></div>
        <div
          className='lineee'
          style={{
            left: `${leftPercent}%`,
            width: `${lineWidth}%`,
          }}
        ></div>
        <input
          type='range'
          min={0}
          max={steps.length - 1}
          value={minIndex}
          step={1}
          className='range-thumb lefting'
          onChange={handleMinChange}
          style={{ zIndex: minIndex === maxIndex ? 5 : 1 }}
        />
        <input
          type='range'
          min={0}
          max={steps.length - 1}
          value={maxIndex}
          step={1}
          className='range-thumb'
          onChange={handleMaxChange}
          style={{ zIndex: 2 }}
        />
        <div className='price-smalldot-wrap'>
              <div className='price-smalldot'>.</div>
              <div className='price-smalldot'>.</div>
              <div className='price-smalldot'>.</div>
              <div className='price-smalldot'>.</div>
              <div className='price-smalldot'>.</div>
              <div className='price-smalldot width-change'>.</div>
        </div>
      </div>
      <div className='price-options-wrap'>
        <select
          className='price-min-wrap'
          value={min}
          onChange={handleSelectMin}
        >
          {steps.slice(0, -1).map((val) => (
            <option key={val} value={val}>
              {val === 0 ? 'Min' : `₹${val}`}
            </option>
          ))}
        </select>
        <div className='to'>to</div>
        <select
          className='price-min-wrap'
          onChange={handleSelectMax}
          value={max}
        >
          {steps.slice(1).map((val) => (
            <option key={val} value={val}>
              {val === Infinity ? '₹1000+' : `₹${val}`}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}