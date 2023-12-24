import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
        <Route exact path='/about' element={<About/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
