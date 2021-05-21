import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { postRequest } from '../../../redux/api'
import { createTransaction } from '../../../redux/actions/transactionForm'
import './Home.css'

const Home = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const [positive, setPositive] = useState(0)
  const [negative, setNegative] = useState(0)
  const [balance, setBalance] = useState(0)
  const [isExpense, setIsExpense] = useState(true)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(createTransaction(text, amount, isExpense))
  }

  //REDUX STATE //
  const history = useSelector(state => state.history)
  console.log('History', history)

  useEffect(() => {
    history.forEach(transaction => {
      if (!isExpense) {
        setPositive(positive + transaction.amount)
        setBalance(balance + transaction.amount)
        console.log('BALANCE in useEffect', balance)
      } else if (isExpense) {
        setNegative(negative + transaction.amount)
        setBalance(balance + transaction.amount)
      }
    })
  }, [history])
  console.log('BALANCE in HOME', balance)
  // const newTransaction = () => {
  //   transaction.id = setId(Math.floor(Math.random() * 1000000000))
  // }

  return (
    <div className='home-div'>
      {/* -------- Total Balance -------- */}
      <div className='div-balance'>
        <h2 className='div-text'>YOUR BALANCE</h2>
        <p className='balance-amount-money'>{balance}</p>
        {/*  --------  Income -------- */}
        <div className='income-expense-div'>
          <div className='income-div'>
            <p className='income-text'>INCOME</p>
            <p className='income-amount'>{positive}</p>
          </div>
          <div className='expense-div'>
            <p className='expense-text'>EXPENSE</p>
            <p className='expense-amount'>{negative}</p>
          </div>
        </div>
      </div>

      {/* -------- History -------- */}
      <div className='history-div'>
        <h2 className='text-history'>History</h2>
        {history.map((transaction, index) => (
          <p className='fist-history-div' key={index}>
            {transaction.text} {transaction.amount}
          </p>
        ))}
      </div>
      {/* -------- Add new Transaction -------- */}
      <div className='div-add-new-transaction'>
        <form>
          <h2 className='text-add-new-transaction '>Add new trasaction:</h2>
          <p className='p-add-new-transaction'>What was your transaction?</p>
          <input
            type='text'
            className='input-text textInput'
            onChange={event => setText(event.target.value)}
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
              className='input-amount textInput'
              required
              onChange={event => setAmount(event.target.value)}
              value={amount}
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
