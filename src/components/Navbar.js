import React from 'react';

export default function Navbar() {

  
  return (
    
<nav className="navbar sticky-top my-4 navbar-expand-lg navbar-dark">
  <div className="container" >
    <a className="navbar-brand" style={{fontSize: '50px',fontWeight:' 500', lineHeight: '106%',  letterSpacing: '-1.4px'}} href="/">Core</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0  "  >
        <li className="nav-item ">
          <a className="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Blog</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="/">contact</a>
        </li>
        
      </ul>
      <form className="d-flex">
      <button className="btn btn-outline-primary mx-1" style={{borderRadius:'14px', padding:'16px 35px'}} type="submit">Cart <span className="badge bg-secondary mx-1" style={{borderRadius:'14px' }}>0</span></button>
        <button className="btn btn-outline-primary mx-1" style={{borderRadius:'14px', padding:'16px 35px'}} type="submit">Get Started</button>
      </form>
    </div>
  </div>
</nav>
  )
}