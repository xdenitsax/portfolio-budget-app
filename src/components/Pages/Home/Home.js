import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { postRequest } from '../../../redux/api'
import { createTransaction } from '../../../redux/actions/transactionForm'
import './Home.css'

const Home = (getText, getAmount) => {
  // const text = useSelector(state => state.transactionForm.description)
  // const amount = useSelector(state => state.transactionForm.amount)

  const dispatch = useDispatch()

  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const [isExpense, setIsExpense] = useState(true)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(createTransaction(text, amount))
  }
  const handleTextChange = event => {
    setText(event.target.value)
  }

  // const handleAmountChange = event => {
  //   setAmount(event.target.value)
  // }
  // const newTransaction = () => {
  //   id: Math.floor(Math.random() * 1000000000),
  //   text,
  //   amount: +amount
  // }

  return (
    <div className='home-div'>
      {/* -------- Total Balance -------- */}
      <div className='div-balance'>
        <h2 className='div-text'>YOUR BALANCE</h2>
        <p className='balance-amount-money'>10423$</p>
        {/*  --------  Income -------- */}
        <div className='income-expense-div'>
          <div className='income-div'>
            <p className='income-text'>INCOME</p>
            <p className='income-amount'>+1090$</p>
          </div>
          <div className='expense-div'>
            <p className='expense-text'>EXPENSE</p>
            <p className='expense-amount'>-340$</p>
          </div>
        </div>
      </div>

      {/* -------- History -------- */}
      <div className='history-div'>
        <h2 className='text-history'>History</h2>
        <p className='fist-history-div'>
          {text}
          {amount}
        </p>
      </div>
      {/* -------- Add new Transaction -------- */}
      <div className='div-add-new-transaction'>
        <form>
          <h2 className='text-add-new-transaction '>Add new trasaction:</h2>
          <p className='p-add-new-transaction'>What was your transaction?</p>
          <input
            type='text'
            className='text'
            onChange={event => handleTextChange(event)}
            value={text}
          ></input>
          <p className='amount-add-new-transaction'>Type of the amount</p>
          <div className='switch-div'>
            <p className='switch-text'>Income</p>
            <label className='switch'>
              <input
                type='checkbox'
                checked={isExpense}
                onChange={() => setIsExpense(!isExpense)}
              />
              <span className='slider round'></span>
            </label>
            <p className='switch-text'>Expense</p>
            <input
              type='text'
              className='input-amount-switch'
              onChange={event => setAmount(event.target.value)}
            />
          </div>
          <br />
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
