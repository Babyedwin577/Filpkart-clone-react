import { DesktopNav } from "./DesktopNav";
import { Logo } from "./Logo";
import { Searchbar } from "./SearchBar";
import { UseIfMobile } from "../../hooks/UseIfMobile";
import { DesktopScroll } from "../Nav/DesktopScrollNav";
import React from 'react'
function Header() {
  const isMobile=UseIfMobile() 
  return (
    <div>
        {
          isMobile?(
          <>
          <Logo/>
          <Searchbar/>
          </>)
          :(
          <>
          <DesktopNav/>
          <DesktopScroll/>
          </>)
        }
    </div>
  )
}

export default Header