import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux/state';

import reportWebVitals from './reportWebVitals';


let reRenderComponent = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App state={state} dispatch={ store.dispatch.bind(store) }/>
        </React.StrictMode>,
        document.getElementById('root')
      );
}

reRenderComponent(store.getState());

store.subscribe(reRenderComponent);

reportWebVitals();
