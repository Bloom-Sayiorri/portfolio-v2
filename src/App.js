import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/' element={<Projects/>}/>
        <Route exact path='/' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
