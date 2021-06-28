import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './NavigationBar.css'
import { SidebarData } from './SidebarData' // [{},{}]

const NavigationBar = ({ history }) => {
  const [navigationBar, setNavigationBar] = useState(false)
  const [showNavigationBar, setShowNavigationBar] = useState(true)

  // Initialize dispatch.
  const dispatch = useDispatch()

  console.log('NavigationBar history', history)

  return (
    <>
      <div className="provider">
        <div className="slider-nav-bar">
          <div className="slider-wrap">
            {SidebarData.map((item, index) => {
              return (
                <Link to={item.path} key={item.path}>
                  <div
                    className="sideBar-link"
                    onClick={() => (typeof item.onClick === 'function' ? dispatch(item.onClick(history)) : null)}
                  >
                    {item.icon}
                    <div className="item-title"> {item.title}</div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default NavigationBar
