import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTransaction, getAllTransactions, getUserData, deleteTransaction } from '../redux/api'
import NavigationBar from './NavigationBar'
import { RiArrowDropRightLine } from 'react-icons/ri'
import { BiDollar } from 'react-icons/bi'
import { TiDelete } from 'react-icons/ti'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'
import './Home.css'
import { Container } from 'postcss-safe-parser/node_modules/postcss'

// Spinner Container and Name introduction text//
const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70vh;
  justify-content: center;
`

const NameIntroduction = styled.div`
  margin: 20px;
`
const NameIntroductionText = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 23px;
  @media (max-width: 850px) {
    font-size: 20px;
  }
`

const ContainerHome = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`
const ContainerBalance = styled.div`
  order: 0;
  padding: 40px 100px 80px;
  margin: 20px;
  border-radius: 9px;
  box-shadow: #c5c5c5 0px 1px 7px -3px, #c5c5c5 0px 1px 3px 0px;

  @media (max-width: 850px) {
    padding: 20px 30px 40px;
  }
  @media (max-width: 530px) {
    padding: 10px 0;
  }
`

const BalanceText = styled.h1`
  text-align: center;
  color: #243754;
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  margin-bottom: 4px;
  @media (max-width: 850px) {
    font-size: 25px;
  }
  @media (max-width: 530px) {
    font-size: 20px;
  }
`

const BalanceAmount = styled.p`
  text-align: center;
  color: #1f1d08;
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  margin-top: 10px;
  @media (max-width: 530px) {
    font-size: 24px;
  }
`

const ContainerIncomeExpense = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`

const ContainerAmountText = styled.div`
  margin: 10px 30px 0;
`

const TextIncomeExpense = styled.p`
  color: #243754;
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  margin-bottom: 10px;
  @media (max-width: 850px) {
    font-size: 18px;
  }
  @media (max-width: 530px) {
    font-size: 15px;
  }
  @media (max-width: 360px) {
    font-size: 13px;
  }
`

const AmountIncome = styled.p`
  text-align: center;
  color: rgb(37, 176, 9);
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
`
const AmountExpense = styled.p`
  text-align: center;
  color: rgba(184, 4, 4, 0.94);
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
`
//HISTORY//
const ContainerHistory = styled.div`
  order: 2;
  margin: 100px 20px 0;
`
const TextHistory = styled.h2`
  text-align: center;
  color: #243754;
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  margin-bottom: 15px;
`
const ContainerTransaction = styled.div``
const OneTransactionContiner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 600px;
  height: 65px;
  box-shadow: #c5c5c5 0px 1px 7px -3px, #c5c5c5 0px 1px 3px 0px;
  border-radius: 9px;
  @media (max-width: 850px) {
    width: 400px;
  }
  @media (max-width: 530px) {
    width: 300px;
    height: 50px;
  }
  @media (max-width: 360px) {
    width: 200px;
  }
`
const TitleTransaction = styled.p`
  margin-left: 10px;
  font-size: 20px;
  color: #243754;
  font-family: 'Montserrat', sans-serif;
  flex-grow: 14;
  @media (max-width: 360px) {
    font-size: 17px;
  }
`
const TransactionAmount = styled.p`
  margin-right: 10px;
  font-size: 23px;
  color: #0f1c2e;
  font-family: 'Montserrat', sans-serif;
  @media (max-width: 360px) {
    font-size: 17px;
  }
`

const ButtonBin = styled.button`
  background-color: #94ae3f00;
  font-size: 13px;
  height: 40px;
  width: 30px;
  padding: 10px 5px 15px 0;
  border: hidden;
  font-size: 25px;
  &:hover {
    cursor: pointer;
  }
`
const ContainerNewTransaction = styled.form`
  order: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  padding: 40px 150px 60px;
  box-shadow: #c5c5c5 0px 1px 7px -3px, #c5c5c5 0px 1px 3px 0px;
  border-radius: 9px;

  @media (max-width: 850px) {
    padding: 20px 30px 40px;
  }
  @media (max-width: 530px) {
    padding: 10px;
  }
`

const TextNewTransaction = styled.h2`
  text-align: center;
  color: #243754;
  font-family: 'Montserrat', sans-serif;
  font-size: 28px;
  @media (max-width: 850px) {
    font-size: 23px;
  }
  @media (max-width: 530px) {
    font-size: 21px;
  }
  @media (max-width: 360px) {
    font-size: 19px;
  }
`

const NoTransactionText = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  @media (max-width: 850px) {
    font-size: 15px;
  }
`
const TitleNewTransaction = styled.p`
  text-align: center;
  color: #243754;
  font-family: 'Montserrat', sans-serif;
  font-size: 21px;
  margin: 20px 0;
  @media (max-width: 850px) {
    font-size: 18px;
  }
  @media (max-width: 530px) {
    font-size: 16px;
  }
  @media (max-width: 360px) {
    font-size: 14px;
  }
`
const InputTransactionText = styled.input`
  font-family: 'Montserrat', sans-serif;
  font-size: 19px;
  color: #243754;
  height: 40px;
  width: 300px;
  border: hidden;
  box-shadow: #c5c5c5 0px 1px 7px -3px, #c5c5c5 0px 1px 3px 0px;
  border-radius: 9px;
  text-align: center;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 850px) {
    width: 200px;
  }
  @media (max-width: 530px) {
    width: 150px;
  }
  @media (max-width: 360px) {
    width: 100px;
  }
`

const TitleTransactionText = styled.p`
  text-align: center;
  color: #243754;
  font-family: 'Montserrat', sans-serif;
  font-size: 21px;
  margin: 10px 0;
  @media (max-width: 850px) {
    font-size: 18px;
  }
  @media (max-width: 530px) {
    font-size: 16px;
  }
  @media (max-width: 360px) {
    font-size: 14px;
  }
`

const SwitchButtonContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const SwitchButtonText = styled.p`
  font-weight: bold;
  text-align: left;
  margin-left: 10px;
  margin-right: 10px;
  color: #243754;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  @media (max-width: 850px) {
    font-size: 12px;
  }
`

const InputTextAmount = styled.input`
  margin: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 19px;
  color: #243754;
  height: 40px;
  width: 300px;
  border: hidden;
  box-shadow: #c5c5c5 0px 1px 7px -3px, #c5c5c5 0px 1px 3px 0px;
  border-radius: 9px;
  text-align: center;
  &:focus {
    outline: none;
    cursor: pointer;
  }
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 850px) {
    width: 200px;
  }
  @media (max-width: 530px) {
    width: 150px;
  }
  @media (max-width: 360px) {
    width: 100px;
  }
`
const ButtonAddTransaction = styled.button`
  width: 120px;
  height: 40px;
  border-style: hidden;
  border-radius: 9px;
  color: #243754;
  margin-top: 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: bolder;
  box-shadow: #c5c5c5 0px 1px 7px -3px, #c5c5c5 0px 1px 3px 0px;
`

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
        <SpinnerContainer>
          <Loader type="Rings" color="#94ae3f" height={80} width={80} />
        </SpinnerContainer>
      ) : (
        <>
          <NameIntroduction>
            <NameIntroductionText>Hi, {firstName}!</NameIntroductionText>
          </NameIntroduction>
          <ContainerHome>
            {/* -------- Total Balance -------- */}
            <ContainerBalance>
              <BalanceText>YOUR BALANCE</BalanceText>
              <BalanceAmount>{income - expenses} $</BalanceAmount>

              {/*  --------  Income -------- */}
              <ContainerIncomeExpense>
                <ContainerAmountText>
                  <TextIncomeExpense>INCOME</TextIncomeExpense>
                  <AmountIncome>{income} $</AmountIncome>
                </ContainerAmountText>
                <ContainerAmountText>
                  <TextIncomeExpense>EXPENSE</TextIncomeExpense>
                  <AmountExpense>{expenses} $</AmountExpense>
                </ContainerAmountText>
              </ContainerIncomeExpense>
            </ContainerBalance>

            {/* -------- History -------- */}
            <ContainerHistory>
              <TextHistory>History</TextHistory>
              {transactions.length ? (
                <>
                  {transactions.map(transaction => (
                    <ContainerTransaction key={transaction._id}>
                      <OneTransactionContiner>
                        <TitleTransaction>
                          <RiArrowDropRightLine style={{ fontSize: '12px' }} />
                          {transaction.title}
                        </TitleTransaction>
                        <TransactionAmount>
                          {transaction.isExpense ? `- ${transaction.amount}` : `+ ${transaction.amount}`}
                          <BiDollar style={{ fontSize: '12px' }} />
                        </TransactionAmount>
                        <ButtonBin onClick={event => handleDelete(event, transaction._id)}>
                          <TiDelete style={{ color: '#d81717' }} />
                        </ButtonBin>
                      </OneTransactionContiner>
                    </ContainerTransaction>
                  ))}
                </>
              ) : (
                <NoTransactionText style={{ margin: '20px 200px' }}>You have no transactions!</NoTransactionText>
              )}
            </ContainerHistory>

            {/* -------- Add new Transaction -------- */}
            <ContainerNewTransaction>
              <TextNewTransaction>Add new trasaction:</TextNewTransaction>
              <TitleNewTransaction>What was your transaction?</TitleNewTransaction>
              <InputTransactionText type="text" onChange={event => setText(event.target.value)} value={text} />
              <TitleTransactionText>Type of the amount</TitleTransactionText>
              <SwitchButtonContainer>
                <SwitchButtonText>Income</SwitchButtonText>
                <label className="switch">
                  <input type="checkbox" checked={isExpense} onChange={() => setIsExpense(!isExpense)} />
                  <span className="slider round"></span>
                </label>

                <SwitchButtonText>Expense</SwitchButtonText>
              </SwitchButtonContainer>
              <InputTextAmount type="text" required onChange={event => setAmount(event.target.value)} value={amount} />
              <ButtonAddTransaction onClick={e => handleSubmit(e)}>Add transaction</ButtonAddTransaction>
            </ContainerNewTransaction>
          </ContainerHome>
        </>
      )}
    </>
  )
}
export default Home
