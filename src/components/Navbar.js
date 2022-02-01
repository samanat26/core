import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  // const [modalBasic, setModalBasic] = useState(false);
  
  return (
    
<nav className="navbar sticky-top my-4 navbar-expand-lg navbar-dark">
  <div className="container-fluid" >
    <Link  className="navbar-brand" style={{fontSize: '50px',fontWeight:' 600', lineHeight: '106%',  letterSpacing: '-1.4px'}} to="/home">Core</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav nav text-center  mx-auto mb-2 mb-lg-0  "  >
        <li className="nav-item me-5">
          <Link  className="nav-link " aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item me-5">
          <Link  className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item me-5">
          <Link  className="nav-link" to="/technology">Technology</Link>
        </li>
        <li className="nav-item me-5">
          <Link  className="nav-link" to="/blog">Blog</Link>
          </li>
          <li className="nav-item me-5">
          <Link  className="nav-link" to="/contact">Contact</Link>
        </li>
        
      </ul>
      <form className="d-flex">
      <button className="btn " style={{color:'white',cursor:'pointer',  fontSize: '18px',fontWeight:' 400',textAlign:'center', borderRadius:'14px', padding:'16px 35px'}} type="submit">Cart <span className="badge bg-secondary mx-1" style={{borderRadius:'14px' }}>0</span></button>



        <button className="btn me-5" style={{backgroundColor: '#1d2838',color:'white',cursor:'pointer',  fontSize: '18px',fontWeight:' 400',textAlign:'center', borderRadius:'15px', padding:'10px 28px'}} type="link"  to="/started" >Get Started</button>
      </form>
    </div>
  </div>
</nav>
  )
}
