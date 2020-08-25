import React from 'react'
import { Router, navigate } from '@reach/router'
import { StateProvider } from 'state'
import GlobalStyle from 'components/global-style'
import { Main } from 'views/'
import session from 'state/session'

const Private = ({ component: Component, children, location, ...rest }) => {
  const [state] = session.usePermissions()
  if (!state.isLoggedIn && location.pathname !== '/login') {
    // If the user is not logged in, redirect to the login page.
    navigate('/login')
    return null
  }
  return children || <Component {...rest} />
}

const PrivateView = () => {
  return <div>I am private</div>
}
const App = () => (
  <StateProvider>
    <GlobalStyle />
    <Router>
      <Main path='/' />
      <Private path='/'>
        <PrivateView path='private' />
      </Private>
    </Router>
  </StateProvider>
)

export default App
