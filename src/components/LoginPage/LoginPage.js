import React, { useState } from 'react'
import AddNewTransaction from '../AddNewTransaction/AddNewTransaction'
import Balance from '../Balance/Balance'
import History from '../History/History'
import Income from '../Income/Income'
import './LoginPage.css'

const LoginPage = () => {
  const submitButton = e => {
    e.preventDefault(e)
  }
  return (
    <>
      <form className='form-div'>
        <p className='text-username'>Username:</p>
        <input type='text' className='input-username'></input>
        <br />
        <p className='text-password'>Password:</p>
        <input type='password' className='input-password'></input>
        <br />
        <input
          type='button'
          value='Sumbit'
          className='input-button'
          onChange={e => submitButton(e)}
        ></input>
      </form>
    </>
  )
}

export default LoginPage
