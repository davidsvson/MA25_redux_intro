import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice';
import cartReducer from './features/cartSlice.js'
import { ComparisonOperator } from '@aws-sdk/client-dynamodb'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </StrictMode>,
);
