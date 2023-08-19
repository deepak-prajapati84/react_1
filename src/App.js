import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route  path='/home' element={<Home />}></Route>
          <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
