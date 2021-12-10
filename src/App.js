import React from 'react';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';

import Header from './component/header';
import HomePage from './component/homePage';
import Sidebar from './component/sidebar';
import ChatPageContainer from './component/chatPage/chatPageContainer';
import Music from './component/music';
import News from './component/news';
import Settings from './component/settings';

import './App.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="wrap__container">
          <Sidebar />
          <div className='wrapper__container container'>
              <Routes>
                <Route exact path='/' element={<HomePage state={props.state.profilePage} addPost={ props.addPost } updatePostText={ props.updatePostText }/>}/>

                <Route exact path='/chatPage' element={<ChatPageContainer store = { props.store }/>} />
                <Route exact path='/homePage' element={<HomePage store = { props.store } />} />
                <Route exact path='/music' element={<Music />} />
                <Route exact path='/news' element={<News />} />
                <Route exact path='/settings' element={<Settings />} />
              </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
