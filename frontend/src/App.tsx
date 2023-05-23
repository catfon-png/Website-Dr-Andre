import './App.css';
import { Navbar2 } from './components/Navbar2/Navbar2';
import {Route, Routes} from 'react-router-dom'
import { Contactos } from './pages/Contactos';
import { Sobre } from './pages/Sobre';
import { Cursos } from './pages/Cursos';
import { AreasAtuação } from './pages/AreasAtuação';
import { Homepage } from './pages/Homepage';
import { Footer } from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Navbar2 />
      <div className='pages-container'>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/sobre' element={<Sobre />}/>
          <Route path='/cursos' element={<Cursos />}/>
          <Route path='/areas' element={<AreasAtuação />}/>
          <Route path='/contactos' element={<Contactos />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
