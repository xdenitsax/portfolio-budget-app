import React from 'react'
import * as reactIconsFa from 'react-icons/fa'
import * as reactIconsAi from 'react-icons/ai'
import * as reactIconsIo from 'react-icons/io'
import * as reactIconsRi from 'react-icons/ri'
import { Link } from 'react-router-dom'

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <reactIconsAi.AiFillHome />,
    iconClosed: <reactIconsRi.RiArrowDownSFill />,
    iconOpened: <reactIconsRi.RiArrowUpSFill />,
  },
  {
    title: 'Register',
    path: '/register',
    icon: <reactIconsIo.IoMdPerson />,
    iconClosed: <reactIconsRi.RiArrowDownSFill />,
    iconOpened: <reactIconsRi.RiArrowUpSFill />,
  },
  {
    title: 'Log In',
    path: '/login',
    icon: <reactIconsAi.AiOutlineProfile />,
  },
  {
    title: 'About Us',
    path: '/aboutus',
    icon: <reactIconsIo.IoMdPeople />,
  },
  {
    title: 'Support',
    path: '/support',
    icon: <reactIconsIo.IoMdHelpCircle />,
  },
  {
    title: 'Log out',
    path: '/logout',
    icon: <reactIconsFa.FaSignOutAlt />,

    iconClosed: <reactIconsRi.RiArrowDownSFill />,
    iconOpened: <reactIconsRi.RiArrowUpSFill />,
  },
]
