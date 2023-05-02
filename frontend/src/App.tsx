import './App.css';
import { Navbar } from './components/Navbar';
import {Route, Routes} from 'react-router-dom'
import { Contactos } from './pages/Contactos';
import { Sobre } from './pages/Sobre';
import { Cursos } from './pages/Cursos';
import { Areas } from './pages/Areas';
import { Homepage } from './pages/Homepage';



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
    </div>
  );
}

export default App;
