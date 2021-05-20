// import { useState, useEffect } from 'react'

// const useForm = () => {
//   const [values, setValues] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//   })
//   const [errors, setErrors] = useState({})

//   const handleChange = e => {
//     const { id, value } = e.target
//     console.log('e.target', e)
//     setValues({
//       ...values,
//       [id]: value,
//     })
//     console.log(value)
//   }
//   const handleSubmit = e => {
//     e.preventDefault()
//   }

//   return { handleChange, values, handleSubmit }
// }

// export default useForm
