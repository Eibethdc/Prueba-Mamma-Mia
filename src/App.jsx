import { Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import Home from './views/Home';
import Pizza from './views/Pizza';
import Carrito from './views/Carrito';
import PizzaProvider from './context/PizzaContext';


function App() {
  
  return (
    <>
    <PizzaProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/pizza/:id' element={ <Pizza />} />
        <Route path='/carrito' element={ <Carrito />} />
      </Routes>
    </PizzaProvider>
    </>
  )
}

export default App
