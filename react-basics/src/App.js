import './app.css'
import Navbar from "./components/Navbar";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


library.add(fab, faCartPlus)

function App() {
  return (
    <div className="App">
      <Navbar />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
