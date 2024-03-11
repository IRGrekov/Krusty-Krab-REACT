import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/app'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './services/reducers'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const store = configureStore({
  reducer: rootReducer,
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
