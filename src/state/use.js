import React from 'react'

const StateContext = React.createContext()
const { Provider } = StateContext

export default ({ actions, updateFn, initialState }) => {
  const StateProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(updateFn, initialState)

    return <Provider value={{ state, dispatch, actions }}>{children}</Provider>
  }

  return { StateProvider, StateContext }
}
