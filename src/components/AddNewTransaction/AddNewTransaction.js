import React, { useState } from 'react'
// import { GlobalProvider } from '../contex/GlobalState'
import './AddNewTransaction.css'

const AddNewTransaction = (getText, getAmount) => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const [show, setShow] = useState(false)

  const handleEvent = e => {
    e.preventDefault()
    setShow(true)
  }
  const getTheText = e => {
    setText(e.target.value)
  }

  const getTheAmount = e => {
    setAmount(e.target.value)
  }
  // const newTransaction = () => {
  //   id: Math.floor(Math.random() * 1000000000),
  //   text,
  //   amount: +amount
  // }

  return (
    <div>
      <div className='div-add-new-transaction'>
        <form>
          <h2 className='text-add-new-transaction '>Add new trasaction:</h2>
          <p className='p-add-new-transaction'>Text</p>
          <input
            type='text'
            className='text'
            onChange={e => getTheText(e)}
            value={text}
          ></input>
          <p className='amount-add-new-transaction'>
            Amount <br />
            (negative-expense, positive+income)
          </p>
          <input
            type='amount'
            className='amount'
            onChange={e => getTheAmount(e)}
            value={amount}
          ></input>
          <button
            className='button-add-transaction'
            onClick={e => handleEvent(e)}
          >
            Add transaction
          </button>
        </form>
      </div>
    </div>
  )
}
export default AddNewTransaction
