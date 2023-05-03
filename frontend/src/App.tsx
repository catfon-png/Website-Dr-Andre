import './App.css';
import { Navbar } from './components/Navbar';
import {Route, Routes} from 'react-router-dom'
import { Contactos } from './pages/Contactos';
import { Sobre } from './pages/Sobre';
import { Cursos } from './pages/Cursos';
import { Areas } from './pages/Areas';
import { Homepage } from './pages/Homepage';
import { Footer } from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/sobre' element={<Sobre />}/>
          <Route path='/cursos' element={<Cursos />}/>
          <Route path='/areas' element={<Areas />}/>
          <Route path='/contactos' element={<Contactos />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
