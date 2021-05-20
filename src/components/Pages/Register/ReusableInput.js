import React from 'react'
import './Register.css'
const ReusableInput = ({ title, id, type, className, value, onChange }) => {
  return (
    <div>
      <label className='reusableInput'>{title}</label>
      <br />
      <input
        id={id}
        type={type}
        className='input'
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default ReusableInput
