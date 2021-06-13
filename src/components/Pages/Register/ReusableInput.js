import React from 'react'

const ReusableInput = ({ title, name, type, value, setValue, setErrors, errors }) => {
  const handleChange = event => {
    setErrors(state => ({
      ...state,
      [name]: '',
    }))
    setValue(event.target.value)
  }

  return (
    <>
      <div>
        <label>{title}</label>
        <input className={errors[name] ? 'error' : ''} id={name} type={type} value={value} onChange={handleChange} />
      </div>
      <div className="error-message-container">
        {errors[name] ? (
          <p>
            {title}
            {errors[name]}
          </p>
        ) : (
          <p></p>
        )}
      </div>
    </>
  )
}

export default ReusableInput
