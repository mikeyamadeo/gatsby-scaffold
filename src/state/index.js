import useState from './use'
import { config as session } from './session'

const actions = {
  ...session.ACTIONS
}

const updateFn = (state, update) => {
  switch (update.action) {
    case session.ACTIONS.LOGIN_SUCCESS: {
      return session.login(state, update.payload)
    }
    case session.ACTIONS.LOGOUT: {
      return session.logout(state)
    }
  }
}

const initialState = {
  session: session.initialize()
}

const { StateProvider, StateContext } = useState({
  updateFn,
  initialState,
  actions
})

export { StateProvider, StateContext }
