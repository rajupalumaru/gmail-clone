import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Layouts/Sidebar/Sidebar';
import EmailList from './components/Layouts/Main/EmaiList/EmailList';
import Compose from './components/Layouts/Main/Compose/Compose';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './redux/mailSilce';
import EmailDetail from './components/Layouts/RightSide/EmailDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import { selectUser, signin, signout } from './redux/userSlice';
import { auth } from './firebase';

function App() {

  const openComposeMessage = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  console.log(openComposeMessage, "openComposeMessage");
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(signin({
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email
        }))
      } else {
        dispatch(signout())
      }
    })
  }, [])

  return (

    <Router>
      {
        user && (<div>
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
        </div>)
      }:{(
        <Login />
      )
      }

    </Router>
  );
}

export default App;
