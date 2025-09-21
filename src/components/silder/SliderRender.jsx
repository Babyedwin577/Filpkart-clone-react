import { Silder } from "./SilderMobile";
import { DesktopSlider } from "./SilderDesktop";
import { UseIfMobile } from "../../hooks/UseIfMobile";
import React from 'react'

export const SliderRender = () => {
    const ifMobile=UseIfMobile()
  return (
    <div>
        {
            ifMobile?
            (<Silder/>)
            :
            (
              <div className="margin-wrap">
              <DesktopSlider/>
              </div>
          )
        }
    </div>
  )
}
