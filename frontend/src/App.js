import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/main/HomePage';
import MainPage from './components/home/MainPage';

function App() {
  return (
    <BrowserRouter>

          <Routes>
            <Route path = '/' exact element = {<HomePage/>} />

            <Route path='/home' exact element = {<MainPage/>} />
            
            
          </Routes>
      
    </BrowserRouter>
  );
}

export default App;
