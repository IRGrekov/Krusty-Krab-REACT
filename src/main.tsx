import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/app'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './services/reducers'
import { socketMiddleware } from './services/middleware/socket-middleware'
import { wsActions, wsActionsUser } from './services/actions/websockets'
import { getCookie } from './utils/cookie'
import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(
        socketMiddleware(
          'wss://norma.nomoreparties.space/orders/all',
          wsActions
        )
      )
      .concat(
        socketMiddleware(
          'wss://norma.nomoreparties.space/orders' +
            `?token=${getCookie('access')}`,
          wsActionsUser
        )
      ),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


root.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>
)

reportWebVitals()
