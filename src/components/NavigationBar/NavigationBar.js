import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as reactIconsFa from 'react-icons/fa'
import * as reactIconsAi from 'react-icons/ai'
import './NavigationBar.css'
import { SidebarData } from './SidebarData'
import NavItem from './NavItem'

const NavigationBar = () => {
  const [navigationBar, setNavigationBar] = useState(false)
  const [showNavigationBar, setShowNavigationBar] = useState(true)

  return (
    <>
      <div className="provider">
        <h1 className="header-div-text">EXPENSE TRACKER</h1>=
        <div className="slider-nav-bar" NavigationBar={NavigationBar}>
          <div className="slider-wrap">
            {SidebarData.map((item, index) => {
              return (
                <Link to={item.path} key={item.path}>
                  <NavItem className="sub-menu" item={item} key={index} />
                </Link>
              )
              return <p key={index}>abc</p>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default NavigationBar
