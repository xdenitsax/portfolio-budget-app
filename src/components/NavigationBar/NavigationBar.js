import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as reactIconsFa from 'react-icons/fa'
import * as reactIconsAi from 'react-icons/ai'
import './NavigationBar.css'
import { SidebarData } from './SidebarData'

const NavigationBar = () => {
  const [navigationBar, setNavigationBar] = useState(false)
  const [showNavigationBar, setShowNavigationBar] = useState(true)

  return (
    <>
      <div className="provider">
        <div className="slider-nav-bar">
          <div className="slider-wrap">
            {SidebarData.map((item, index) => {
              return (
                <Link to={item.path} key={item.path}>
                  <div className="sideBar-link">
                    {item.icon}
                    <div className="item-title"> {item.title}</div>
                  </div>
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
