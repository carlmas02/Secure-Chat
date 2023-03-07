import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatPage from './components/ChatPage/ChatPage';
import LoginPage from './components/LoginPage/LoginPage';
import InfoPage from './components/InfoPage/InfoPage';

function App() {
  return (
    <BrowserRouter>

          <Routes>
            <Route path = '/' exact element = {<ChatPage/>} />
            
            // set up routes such that - check users login status, if not logged in, take to info page.
            <Route path = '/info' exact element = {<InfoPage />} />

            <Route path='/login' exact element = {<LoginPage/>} />
          </Routes>
      
    </BrowserRouter>
  );
}

export default App;
