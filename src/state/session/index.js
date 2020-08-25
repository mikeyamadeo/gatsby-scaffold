import React from 'react'
import { StateContext } from 'state/'

const ACTIONS = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT'
}

export const config = {
  ACTIONS,
  initialize: () => {
    // TODO: local storage stuff
    return {
      userId: 'mikey',
      token: '1234'
      // permissionLvl: LVLS.MASTER
    }
  },
  login: (state, payload) => {
    // TODO: local storage stuff
    return {
      ...state,
      session: {
        userId: payload.userId,
        token: payload.token
      }
    }
  },
  logout: state => {
    // TODO: local storage stuff
    return {
      ...state,
      session: {
        userId: '',
        token: ''
      }
    }
  }
}

const useService = () => {
  const global = React.useContext(StateContext)
  const state = global.state.session

  return [
    { ...state },
    {
      login: async ({ email, password }) => {}
    }
  ]
}

export default useService
