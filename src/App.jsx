import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={ <Navigate to="/home/all" /> } />
        <Route exact path="/home/:id" element={<Home/>}/>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
