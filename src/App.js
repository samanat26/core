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

function App() {
  

  return (
    <>
    
      <div className="App">
    
        <Navbar />
        {/* <Essential/> */}
        <Home/>
        {/* <Started/> */}
        {/* <Individuals/> */}
          {/* <Contactme/> */}
          {/* <Modal/> */}
          {/* <Blog/> */}
          {/* <About /> */}
          {/* <Technology/> */}


          
          <Footer />

      
      </div>

    </>
  );
}

export default App;
