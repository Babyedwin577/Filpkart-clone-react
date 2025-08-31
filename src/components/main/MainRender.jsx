import { Featured } from "./mobileScreen/Featured";
import { FreedomSale } from "./mobileScreen/FreedomSale";
import { Products } from "./mobileScreen/Products";
import { Sales } from "./mobileScreen/Sales";
import { Sponsored } from "./mobileScreen/Sponsored";
import { SponsoredRowTwo } from "./mobileScreen/SponsoredRowTwo";
import { UseIfMobile } from "../../hooks/UseIfMobile";
import { ProductSection1 } from "./laptopScreen/ProductSection1";
import { TopDeals } from "./laptopScreen/ProductSection2";
import { ProductSection3 } from "./laptopScreen/ProductSection3";
import './mainrender.css'

import React from 'react'

export const MainRender = () => {
    const isMobile=UseIfMobile()
  return (
       <>
       {
         isMobile?(
            <>
              <Products/>
              <FreedomSale/>
              <Sales/>
              <Featured/>
              <Sponsored/>
              <SponsoredRowTwo/>
            </>
         ):
         (
            <>
            <ProductSection1
             objectName={"electronics"}
             title={"Best of Electronics"}
            />
            <ProductSection1
             objectName={"beauty"}
             title={"Beauty,Food, Toys & more"}
            />
            <ProductSection1
             objectName={"sports"}
             title={"Sports, Healthcare & more"}
            />
            <div className="grid-wrap">
              <TopDeals
                objectName={"specialSale"}
                title={"Season's Top Picks"}
              />
              <TopDeals
                objectName={"home"}
                title={"Make your home stylish"}
              />
              <TopDeals
                objectName={"decor"}
                title={"Home Decor & Furnishings"}
              />
              <TopDeals
                objectName={"appliances"}
                title={"Trending Gadgets & Appliances"}
              />
              <TopDeals
                objectName={"hair"}
                title={"Hair & Skin Care for Monsoon"}
              />
              <TopDeals
                objectName={"home"}
                title={"Best Value Deals on Fashion"}
              />
              <TopDeals
                objectName={"specialSale"}
                title={"Ganesh charurthi Specials"}
              />
            </div>
            <div className="section3-wrap">
               <ProductSection3
              data={"topdeals"}
              title={"Fashion Top Deals"}
            />
            </div>
            </>
         )
       }
       </>
  )
}
