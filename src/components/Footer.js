import React from 'react';

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
            <li className="mb-2"style={{color:'white'}}><a href="/about">About</a></li>
            <li className="mb-2"><a href="/technology">Technology</a></li>
            <li className="mb-2"><a href="/contact">Contact</a></li>
            <li className="mb-2"><a href="/blog">Blog</a></li>
          </ul>
        </div>
        <div className="footer col-6 col-lg-2 mb-3">
          <h5>Social</h5>
          <ul className="list-unstyled">
            <li className="mb-2"><a href="/">Facebook</a></li>
            <li className="mb-2"><a href="/">Instagram</a></li>
            <li className="mb-2"><a href="/">Twitter</a></li>
            <li className="mb-2"><a href="/">Youtube</a></li>
          </ul>
        </div>
        <div className="footer col-6 col-lg-2 mb-3">
          <h5>Template</h5>
          <ul className="list-unstyled">
            <li className="mb-2"><a href="/">Licensing</a></li>
            <li className="mb-2"><a href="/">Style Guide</a></li>
            <li className="mb-2"><a href="/">Changelog</a></li>
        
          </ul>
        </div>
        <p>All rights reserved. Powered by Webflow</p>
       
      </div>
    </div>
  </footer>
  )
}
