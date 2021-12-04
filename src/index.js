import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './redux/state';
import { addPost, updatePostText, subscribe } from './redux/state';

import reportWebVitals from './reportWebVitals';


let reRenderComponent = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App state={state}  addPost={ addPost } updatePostText={ updatePostText }/>
        </React.StrictMode>,
        document.getElementById('root')
      );
}

reRenderComponent(state);

subscribe(reRenderComponent);

reportWebVitals();
