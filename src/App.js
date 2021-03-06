import React from 'react';
import './App.scss';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav data={props.state.navBar} />
        <div className="app-wrapper-content">
          <Route path="/profile" render={() => <Profile addPost={props.addPost} posts={props.state.profilePage} updateNewPostText={props.updateNewPostText} />} />
          <Route path="/dialogs" render={() => <Dialogs data={props.state.dialogsPage} />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
