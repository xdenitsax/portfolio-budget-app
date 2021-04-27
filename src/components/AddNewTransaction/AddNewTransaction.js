import React, { useState } from 'react'
import './AddNewTransaction.css'
const AddNewTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const handleEvent = e => {
    e.preventDefault()
  }
  const getTheText = getText => {
    setText(getText)
  }

  const getTheAmount = e => {
    setAmount(e)
  }
  console.log('text', text)
  console.log('number', amount)
  return (
    <div className='div-add-new-transaction'>
      <form>
        <h1 className='text-add-new-transaction '>Add new trasaction:</h1>
        <p className='p-add-new-transaction'>Text</p>
        <input
          type='text'
          className='text'
          onChange={getText => getTheText(getText)}
        ></input>
        <p className='amount-add-new-transaction'>
          Amount <br />
          (negative-expense, positive+income)
        </p>
        <input
          type='amount'
          className='amount'
          onChange={e => getTheAmount(e)}
        ></input>
        <button
          className='button-add-transaction'
          onClick={e => handleEvent(e)}
        >
          Add transaction
        </button>
      </form>
    </div>
  )
}
export default AddNewTransaction
