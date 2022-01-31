import './app.css'
import Navbar from "./components/Navbar";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import GlobalContext from './components/context/globalContext';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import 'bootstrap'

library.add(fab, faCartPlus)

function App() {
  return (
    <div className="App">
      <GlobalContext>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}> </Route>
            <Route path='/catalog' element={<Catalog/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </GlobalContext>
    </div>
  );
}

export default App;
