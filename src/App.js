import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Header from './component/header';
import HomePageContainer from './component/homePage/homePageContainer';
import UsersContainer from './component/users/UsersContainer';
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
                <Route exact path='/' element={<HomePageContainer />}/>
                <Route exact path='/users' element={ <UsersContainer /> } />
                <Route exact path='/chatPage' element={<ChatPageContainer />} />
                <Route exact path='/homePage' element={<HomePageContainer />} />
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
