import './app.css'
import Navbar from "./components/Navbar";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Test from './components/test';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



library.add(fab, faCartPlus)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/catalog' element={<Catalog />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/test' element={<Test />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
