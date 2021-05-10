import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postRequest } from '../../../redux/api'
import './Home.css'

import Balance from './Balance/Balance'
import History from './History/History'
import Income from './Income/Income'

const Home = (getText, getAmount) => {
  // const text = useSelector(state => state.transactionForm.description)
  // const amount = useSelector(state => state.transactionForm.amount)

  const dispatch = useDispatch()

  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(postRequest(text, amount))
  }
  const handleTextChange = event => {
    setText(event.target.value)
  }

  const handleAmountChange = event => {
    setAmount(event.target.value)
  }
  // const newTransaction = () => {
  //   id: Math.floor(Math.random() * 1000000000),
  //   text,
  //   amount: +amount
  // }

  return (
    <div>
      <Balance />
      <Income />
      <History />
      <div className='div-add-new-transaction'>
        <form>
          <h2 className='text-add-new-transaction '>Add new trasaction:</h2>
          <p className='p-add-new-transaction'>Text</p>
          <input
            type='text'
            className='text'
            onChange={event => handleTextChange(event)}
            value={text}
          ></input>
          <p className='amount-add-new-transaction'>
            Amount <br />
            (negative-expense, positive+income)
          </p>
          <input
            type='amount'
            className='amount'
            onChange={event => handleAmountChange(event)}
            value={amount}
          ></input>
          <button
            className='button-add-transaction'
            onClick={e => handleSubmit(e)}
          >
            Add transaction
          </button>
        </form>
      </div>
    </div>
  )
}
export default Home
