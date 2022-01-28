import React from 'react';

export default function Modal() {
  return (

    //before adding
    <div className="modal" tabindex="-1">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Your Cart</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <p>There are no items in your cart.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" style={{borderRadius:'15px', padding:'18px 40px'}}>Back to Shop</button>
        </div>
      </div>
    </div>
  </div>
  )
}
