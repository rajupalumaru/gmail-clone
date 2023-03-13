import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Layouts/Sidebar/Sidebar';
import EmailList from './components/Layouts/Main/EmaiList/EmailList';
import Compose from './components/Layouts/Main/Compose/Compose';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './redux/mailSilce';
import EmailDetail from './components/Layouts/RightSide/EmailDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const openComposeMessage = useSelector(selectSendMessageIsOpen);
  console.log(openComposeMessage, "openComposeMessage")
  return (
    <Router>
      <div>
        <Header />
        <div className='app-body'>
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <EmailList />
            </Route>
            <Route path="/mail">
              <EmailDetail />
            </Route>
          </Switch>
        </div>
        {
          openComposeMessage && <Compose />
        }
      </div>
    </Router>
  );
}

export default App;
