import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Layouts/Sidebar/Sidebar';
import EmailList from './components/Layouts/Main/EmaiList/EmailList';

function App() {
  return (
    <div>
      <Header />
      <div className='app-body'>
        <Sidebar />
        <EmailList/>
      </div>
    </div>
  );
}

export default App;
