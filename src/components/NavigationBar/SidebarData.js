import React from 'react'
import * as reactIconsFa from 'react-icons/fa'
import * as reactIconsAi from 'react-icons/ai'
import * as reactIconsIo from 'react-icons/io'
import * as reactIconsRi from 'react-icons/ri'

import { logout } from '../../redux/api'

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    onClick: null,
    icon: <reactIconsAi.AiFillHome />,
    iconClosed: <reactIconsRi.RiArrowDownSFill />,
    iconOpened: <reactIconsRi.RiArrowUpSFill />,
  },
  {
    title: 'About',
    path: '/about',
    onClick: null,
    icon: <reactIconsIo.IoMdPeople />,
  },
  {
    title: 'Support',
    path: '/support',
    onClick: null,
    icon: <reactIconsIo.IoMdHelpCircle />,
  },
  {
    title: 'Log out',
    path: '/welcome',
    onClick: history => {
      console.log('history', history)
      return logout(history)
    },
    icon: <reactIconsFa.FaSignOutAlt />,
    iconClosed: <reactIconsRi.RiArrowDownSFill />,
    iconOpened: <reactIconsRi.RiArrowUpSFill />,
  },
]
