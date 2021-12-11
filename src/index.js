import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux/redux-store';

import reportWebVitals from './reportWebVitals';


let reRenderComponent = () => {
    ReactDOM.render(
        <React.StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
        </React.StrictMode>,
        document.getElementById('root')
      );
}

reRenderComponent();
reportWebVitals();
