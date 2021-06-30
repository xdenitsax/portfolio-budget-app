import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData' // [{},{}]
import styled from 'styled-components'

const Provider = styled.div`
  float: left;
  border: hidden;
  position: sticky;
  display: flex;
  justify-content: center;
  transition: 550ms;
  width: 90px;
  height: 90vh;
  margin-right: 20px;

  top: 0;
  @media (max-width: 768px) {
    margin-right: 0px;
    width: 50px;
  }
`
const SliderNavBar = styled.div`
  background: #94ae3f;
  width: 90px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  transition: 550ms;

  @media (max-width: 768px) {
    width: 50px;
  }
`

const SliderWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
const SidebarLink = styled.div`
  display: flex;
  color: #ebebeb;
  justify-content: start;
  align-items: center;
  list-style: none;
  height: 60px;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`
const Icon = styled.div`
  font-size: 1.4rem;
  margin-right: 5px;
  display: flex;
`
const ItemTitle = styled.p`
  @media (max-width: 768px) {
    display: none;
  }
  text-decoration: none;
`

const NavigationBar = ({ history }) => {
  const [navigationBar, setNavigationBar] = useState(false)
  const [showNavigationBar, setShowNavigationBar] = useState(true)

  // Initialize dispatch.
  const dispatch = useDispatch()

  return (
    <>
      <Provider>
        <SliderNavBar>
          <SliderWrap>
            {SidebarData.map((item, index) => {
              return (
                <Link style={{ textDecoration: 'none' }} to={item.path} key={item.path}>
                  <SidebarLink
                    onClick={() => (typeof item.onClick === 'function' ? dispatch(item.onClick(history)) : null)}
                  >
                    <Icon>{item.icon}</Icon>
                    <ItemTitle>{item.title}</ItemTitle>
                  </SidebarLink>
                </Link>
              )
            })}
          </SliderWrap>
        </SliderNavBar>
      </Provider>
    </>
  )
}

export default NavigationBar
