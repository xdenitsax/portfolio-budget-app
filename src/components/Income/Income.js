import React from 'react'
import './Income.css'
const Income = () => {
  return (
    <div className='income-expense-div'>
      <div className='income-div'>
        <p className='income-text'>INCOME</p>
        <p className='income-amount'> 1300 $</p>
      </div>
      <div className='expense-div'>
        <p className='expense-text'>EXPENSE</p>
        <p className='expense-amount'>400 $</p>
      </div>
    </div>
  )
}

export default Income
