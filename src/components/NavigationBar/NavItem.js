import React, { useState } from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { Link } from 'react-router-dom'
import './SubMenu.css'

const NavItem = ({ item }) => {
  const [subMenuNavBar, setSubMenuNavBar] = useState(false)
  const [showNavBar, setShowNavBar] = useState(true)
  return (
    <>
      <div className="sideBar-link">
        <div>
          {item.icon}
          <div className="sideBar-label">{item.title}</div>
        </div>

        {/* {subMenuNavBar &&
          item.subMenuNavBar.map((item, index) => {
            return (
              <Link className="dropdown-link" to={item.path} key={index}>
                {item.icon}
                <div className="sidebar-label">{item.title}</div>
              </Link>
            )
          })} */}
      </div>
    </>
  )
}

export default NavItem
