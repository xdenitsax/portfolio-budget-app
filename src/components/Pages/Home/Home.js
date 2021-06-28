import React, { useState, useEffect } from 'react'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { createTransaction, getAllTransactions, getUserData, deleteTransaction } from '../../../redux/api'
import NavigationBar from '../../NavigationBar/NavigationBar'
import { RiArrowDropRightLine } from 'react-icons/ri'
import { BiDollar } from 'react-icons/bi'
import { TiDelete } from 'react-icons/ti'
import Loader from 'react-loader-spinner'

const Home = ({ history }) => {
  // Local state.
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const [isExpense, setIsExpense] = useState(true)

  // Redux state.
  const firstName = useSelector(state => state.user.firstName)
  const isUserLoading = useSelector(state => state.user.isLoading)
  const isHistoryLoading = useSelector(state => state.history.isLoading)
  const userId = useSelector(state => state.user.userId)
  const transactions = useSelector(state => state.history.transactions)

  // Initialize dispatch.
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(createTransaction({ title: text, amount, category: 'other', userId, isExpense, history }))
  }

  const handleDelete = (event, id) => {
    event.preventDefault()
    dispatch(deleteTransaction(id, history))
  }

  // const positiveTransactions = transactions.filter(transaction => transaction.isExpense === false)
  const income = transactions.reduce((accumulator, element) => {
    //  if the element is Income add accumulator and amount, and return
    if (!element.isExpense) {
      return accumulator + element.amount
    }
    // else if the element is Expense return accumulator
    return accumulator
  }, 0)

  const expenses = transactions.reduce((accumulator, element) => {
    //  if the element is Expense add accumulator and amount, and return
    if (element.isExpense) {
      return accumulator + element.amount
    }
    // else if the element is Expense return accumulator
    return accumulator
  }, 0)

  useEffect(() => {
    dispatch(getUserData(history))
    dispatch(getAllTransactions(history))
  }, [])

  return (
    <>
      <NavigationBar history={history} />
      {isUserLoading || isHistoryLoading ? (
        <div className="home-spinner-container">
          <Loader type="Rings" color="#94ae3f" height={80} width={80} />
        </div>
      ) : (
        <>
          <div className="name-introduction">
            <h1>Hi, {firstName}!</h1>
          </div>
          <div className="home-div">
            {/* -------- Total Balance -------- */}
            <div className="div-balance">
              <h2 className="div-text">YOUR BALANCE</h2>
              <p className="balance-amount-money">{income - expenses} $</p>

              {/*  --------  Income -------- */}
              <div className="income-expense-div">
                <div className="income-div">
                  <p className="income-text">INCOME</p>
                  <p className="income-amount">{income} $</p>
                </div>
                <div className="expense-div">
                  <p className="expense-text">EXPENSE</p>
                  <p className="expense-amount">{expenses} $</p>
                </div>
              </div>
            </div>

            {/* -------- History -------- */}
            <div className="history-div">
              <h2 className="text-history">History</h2>
              {transactions.length ? (
                <div>
                  {transactions.map(transaction => (
                    <div key={transaction._id}>
                      <div className="fist-history-div">
                        <p className="transaction-title">
                          <RiArrowDropRightLine className="arrow" />
                          {transaction.title}
                        </p>
                        <p className="transaction-amount">
                          {transaction.isExpense ? `- ${transaction.amount}` : `+ ${transaction.amount}`}
                          <BiDollar className="dolar" />
                        </p>
                        <button className="bin" onClick={event => handleDelete(event, transaction._id)}>
                          <TiDelete className="bin-icons" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <h4>You have no transactions</h4>
              )}
            </div>

            {/* -------- Add new Transaction -------- */}
            <div className="div-add-new-transaction">
              <form>
                <h2 className="text-add-new-transaction ">Add new trasaction:</h2>
                <p className="p-add-new-transaction">What was your transaction?</p>
                <input
                  type="text"
                  className="input-text textInput"
                  onChange={event => setText(event.target.value)}
                  value={text}
                ></input>
                <p className="amount-add-new-transaction">Type of the amount</p>
                <div className="switch-div">
                  <p className="switch-text">Income</p>
                  <label className="switch">
                    <input type="checkbox" checked={isExpense} onChange={() => setIsExpense(!isExpense)} />
                    <span className="slider round"></span>
                  </label>
                  <p className="switch-text">Expense</p>
                  <input
                    type="text"
                    className="input-amount textInput"
                    required
                    onChange={event => setAmount(event.target.value)}
                    value={amount}
                  />
                </div>

                <br />
                <button className="button-add-transaction" onClick={e => handleSubmit(e)}>
                  Add transaction
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  )
}
export default Home
