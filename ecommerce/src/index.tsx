import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import productReducer from './reducer/ProductReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import detailReducer from './reducer/DetailReducer';
import CartReducer from './reducer/CartReducer';
import { SignInReducer } from './reducer/SignInReducer';
import { BrowserRouter } from 'react-router-dom';


const rootReducer = combineReducers({
  products: productReducer,
  details: detailReducer,
  cart: CartReducer,
  signIn: SignInReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
