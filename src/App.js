import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Contactme from './components/Contactme';
import Essential from './components/Essential';
import Footer from './components/Footer';
import Home from './components/Home';
import Individuals from './components/Individuals';
// import Modal from './components/Modal';
import Navbar from './components/Navbar';
import Started from './components/Started';
import Technology from './components/Technology';

import {
  
  Routes,
  Route,

} from "react-router-dom";

function App() {
  

  return (
    <>
    
      <div className="App">
    
        <Navbar />
<Routes>
        <Route path="/home" element = { <Home/>}>
          </Route>
          <Route path="/about" element = { <About/>}>
          </Route>
          <Route path="/technology" element = { <Technology/>}>
          </Route>
          <Route path="/blog" element = { <Blog/>}>
          </Route>
          <Route path="/contact" element = { <Contactme/>}>
          </Route>
</Routes>
     
          <Footer />

      
      </div>

    </>
  );
}

export default App;
