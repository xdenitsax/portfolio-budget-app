export const setUserCredentials = ({ token, userId }) => {
  localStorage.setItem('token', token)
  localStorage.setItem('userId', userId)
}

export const getUserCredentials = () => {
  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('userId')
  return { token, userId }
}
