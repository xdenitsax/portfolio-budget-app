const userReducer = (state = { name: '', lastName: '' }, action) => {
  switch (action.type) {
    case 'GET_USER_SUCCESS':
      return state

    default:
      return state
  }
}

export default userReducer
