import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeSwitcher from 'react-css-vars';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './store/reducers/reducer';

// Redux Store
const rootReducer = combineReducers({
  search: reducer
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);

const cssVariables = {
  theme: 'modern',
  primary: '#2174bb',
  secondary: '#3b7a23',
  btnPrimary: '#6caf5b',
  btnPrimaryHover: '#348420',
  secondaryTextShadow: '#277314',
  secondaryBoxShadow: '#246b12',
  font: '#333',
  jumbotronOverlay: 'rgba(26,109,182,0.77)',
  jumbotronOverlay2: 'rgba(26,109,182,1)',
  mobileBtnBorder: '#1b530b',
  mobileBtnTextShadow: '#196e00',
  mobileBtnBoxShadow1: '#4a9833',
  mobileBtnBoxShadow2: 'rgba(255,255,255,.5)',
  mobileBtn1: '#8dbf76',
  mobileBtn2: '#46962e',
  mobileBtnSecondary: '#fd7700',
  mobileBtnSecondaryTextShadow: '#e85403'
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeSwitcher theme={cssVariables}>
        <App />
      </ThemeSwitcher>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
