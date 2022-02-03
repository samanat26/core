import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  let Style = {
    backgroundColor: '#000',
    color : 'white',
    textDecoration: 'none',
    alignItems: 'center'
    // maxWidth: '840px'
  }

  return (
    <footer className="bd-footer py-5 mt-5 " style={Style}>
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-3 mb-3">
            <h1 className=''style={{fontSize: '50px',fontWeight:' 500', lineHeight: '106%',  letterSpacing: '-1.4px'}} >Core</h1>
            {/* <span className="fs-5">Core</span> */}
          
           <ul className="list-unstyled small text-muted">
            <li className="mb-2">A highly scalable, fast and secure blockchain plateform for distributed apps, enterprise use cases and the new internet economy. </li>
          
            <a className="mb-2">info@yoursite.com</a>
          </ul> 
        </div>
        <div className="footer col-6 col-lg-2 offset-lg-1 mb-3">
          <h5>Quick Links</h5>
          <ul className="list-unstyled " style={{color:'white'}}>
            <li className="mb-2"style={{color:'white'}}><Link to="/about">About</Link></li>
            <li className="mb-2"><Link to="/technology">Technology</Link></li>
            <li className="mb-2"><Link to="/contact">Contact</Link></li>
            <li className="mb-2"><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
        <div className="footer col-6 col-lg-2 mb-3">
          <h5>Social</h5>
          <ul className="list-unstyled">
            <li className="mb-2"><Link to="/">Facebook</Link></li>
            <li className="mb-2"><Link to="/">Instagram</Link></li>
            <li className="mb-2"><Link to="/">Twitter</Link></li>
            <li className="mb-2"><Link to="/">Youtube</Link></li>
          </ul>
        </div>
        <div className="footer col-6 col-lg-2 mb-3">
          <h5>Template</h5>
          <ul className="list-unstyled">
            <li className="mb-2"><Link to="/">Licensing</Link></li>
            <li className="mb-2"><Link to="/">Style Guide</Link></li>
            <li className="mb-2"><Link to="/">Changelog</Link></li>
        
          </ul>
        </div>
        <p>All rights reserved. Powered by Webflow</p>
       
      </div>
    </div>
  </footer>
  )
}
