import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Contactme from './components/Contactme';
import Footer from './components/Footer';
import Home from './components/Home';
import Essential from './components/Essential';
import Standard from './components/Standard';
import Professional from './components/Professional';
import Enterprise from './components/Enterprise';
import Individuals from './components/Individuals';
import Dessential from './components/Dessential';
import Dstandard from './components/Dstandard';
import Dprofessional from './components/Dprofessional';

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
<Route path="/" element = { <Home/>} />
        <Route path="/home" element = { <Home/>}/>
          
          <Route path="/about" element = { <About/>}/>
          
          <Route path="/technology" element = { <Technology/>}/>
          
          <Route path="/blog" element = { <Blog/>}/>
          
          <Route path="/contact" element = { <Contactme/>}/>
          
          {/* btns............... */}
          <Route path="/started" element = { <Started/>} />
          <Route path="/enterprise" element = { <Enterprise/>} /> 
          <Route path="/individuals" element = { <Individuals/>} />
          <Route path="/essentials" element = { <Essential/>} />
          <Route path="/standard" element = { <Standard/>} /> 
          <Route path="/professional" element = { <Professional/>} />
          <Route path="/dessential" element = { <Dessential/>} />
          <Route path="/dstandard" element = { <Dstandard/>} />
          <Route path="/dprofessional" element = { <Dprofessional/>} />
          {/* <Route path="/started" element = { <Started/>} /> */}

          


</Routes>
     
          <Footer />

      
      </div>

    </>
  );
}

export default App;
