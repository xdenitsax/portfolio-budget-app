import { ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR } from '../actionTypes'

export const alertActions = {
  success,
  error,
  clear,
}

const success = message => {
  return { type: ALERT_SUCCESS, message }
}

const error = message => {
  return { type: ALERT_ERROR, message }
}

const clear = () => {
  return { type: ALERT_CLEAR }
}
