import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Layouts/Sidebar/Sidebar';
import EmailList from './components/Layouts/Main/EmaiList/EmailList';
import Compose from './components/Layouts/Main/Compose/Compose';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './redux/mailSilce';

function App() {

  const openComposeMessage = useSelector(selectSendMessageIsOpen);
  console.log(openComposeMessage, "openComposeMessage")
  return (
    <div>
      <Header />
      <div className='app-body'>
        <Sidebar />
        <EmailList />
      </div>
      {
        openComposeMessage && <Compose />
      }

    </div>
  );
}

export default App;
