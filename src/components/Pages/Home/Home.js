import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTransaction } from '../../../redux/actions/transactionForm'
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

  /// Post request to the Server///
  const postTransaction = async () => {
    const requestPostOptions = {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
    try {
      const response = await fetch(
        'http://localhost:3000/postTransaction',
        requestPostOptions
      )
      const json = await response.json()
      console.log(json)
    } catch (err) {
      console.log(err)
    }
  }

  ////////////////////////////////

  const handleSubmit = e => {
    e.preventDefault()
    // postTransaction()
    dispatch(addTransaction(text, amount))
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
