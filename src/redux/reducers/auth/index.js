// **  Initial State
const initialState = {
  userData: {},
  username: ""
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        userData: action.data,
        [action.config.storageTokenKeyName]: action[action.config.storageTokenKeyName],
        [action.config.storageRefreshTokenKeyName]: action[action.config.storageRefreshTokenKeyName]
      }
    case 'LOGOUT':
      const obj = { ...action }
      delete obj.type
      return { ...state, userData: {}, ...obj }
    case 'usernameChange':
      return {
        ...state,
        username: action.data
      }
    case 'resetUserData':
      return {
        ...state,
        userData: {}
      }

    default:
      return state
  }
}

export default authReducer
