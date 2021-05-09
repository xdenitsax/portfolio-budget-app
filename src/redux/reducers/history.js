const historyReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_HISTORY_SUCCESS':
      return state

    default:
      return state
  }
}

export default historyReducer
