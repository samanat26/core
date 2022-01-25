import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Contactme from './components/Contactme';
import Footer from './components/Footer';
// import Modal from './components/Modal';
import Navbar from './components/Navbar';

function App() {
  

  return (
    <>
    
      <div className="App">
        <div className="App-header">
        <Navbar />
          {/* <Contactme/> */}
          {/* <Modal/> */}
          {/* <Blog/> */}
          <About />
          <Footer />

        </div>
      </div>

    </>
  );
}

export default App;
