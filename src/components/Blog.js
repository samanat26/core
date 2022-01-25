import React from 'react';

export default function Blog() {

    let Style = {
        textAlign: 'center',
        backgroundColor: '#000',
        color: 'white',
        minHeight: '50%',
        alignItems: 'center',
        maxWidth: '991px'

    }
    let Span = {
        // marginBottom: '15px',
        padding: '9px 18px',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: '#2d466a',
        borderRadius: '12px',
        color: '#3183ff',
        fontSize: '13px',
        lineHeight: '140%',
        fontWeight: '500',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        // backgroundColor:'#000'
    }

    return (
        <div className="container my-3 " style={Style}>
            <div className="row">
                <div className="col-md-12 mx-auto">
                    <div className="row">
                        <div className="col">
                            <span className="badge my-3" style={Span} >Blog</span>
                            <h1 className="mb-5" style={{ fontSize: '80px', fontWeight: ' 400', lineHeight: '106%', letterSpacing: '-1.4px' }}>
                                News and Updates
                            </h1>
                            <p className="mb-5" style={{ maxWidth:'900', color: '#616d7e' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi repudiandae itaque est dolore sequi obcaecati, atque magni doloremque, voluptate provident dolorem ut qui enim aliquam, molestiae eos voluptates commodi nam!
                            </p>
                        </div>
                    </div>
                    <div className="container  my-3" >
                        <div className="row">
                            <div className="col-md-6 my-3">
                                <div className="card-group">
                                    <div className="card" style={Style}>
                                        <img src="assets/images/blue.jpg" className="card-img-top my-3" style={{ opacity: '1', borderRadius: '50px' }} alt="picture" />
                                        <div className="card-body">
                                            <p className="card-text"><small className="text-muted">date...</small></p>
                                            <p className="card-text" style={{ color: 'rgba(216, 223, 233, 0.8)', fontSize: '40px', fontWeight: ' 600', lineHeight: '105%', letterSpacing: '-1.4px' }}>This card has supporting text below as a natural lead-in to additional content.</p>
                                        </div>
                                    </div></div></div>
                            <div className="col-md-6 my-3">
                                <div className="card-group">
                                    <div className="card" style={Style}>
                                        <img src="assets/images/blue.jpg" className="card-img-top my-3" style={{ opacity: '1', borderRadius: '50px' }} alt="picture" />
                                        <div className="card-body">
                                            <p className="card-text"><small className="text-muted">date...</small></p>
                                            <p className="card-text" style={{ color: 'rgba(216, 223, 233, 0.8)', fontSize: '40px', fontWeight: ' 600', lineHeight: '105%', letterSpacing: '-1.4px' }}>This card has supporting text below as a natural lead-in to additional content.</p>
                                        </div>
                                    </div></div></div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 my-3">
                                <div className="card-group">
                                    <div className="card" style={Style}>
                                        <img src="assets/images/blue.jpg" className="card-img-top my-3" style={{ opacity: '1', borderRadius: '50px' }} alt="picture" />
                                        <div className="card-body">
                                            <p className="card-text"><small className="text-muted">date...</small></p>
                                            <p className="card-text" style={{ color: 'rgba(216, 223, 233, 0.8)', fontSize: '40px', fontWeight: ' 600', lineHeight: '105%', letterSpacing: '-1.4px' }}>This card has supporting text below as a natural lead-in to additional content.</p>
                                        </div>
                                    </div></div></div>
                            <div className="col-md-6 my-3">
                                <div className="card-group">
                                    <div className="card" style={Style}>
                                        <img src="assets/images/blue.jpg" className="card-img-top my-3" style={{ opacity: '1', borderRadius: '50px' }} alt="picture" />
                                        <div className="card-body">
                                            <p className="card-text"><small className="text-muted">date...</small></p>
                                            <p className="card-text" style={{ color: 'rgba(216, 223, 233, 0.8)', fontSize: '40px', fontWeight: ' 600', lineHeight: '105%', letterSpacing: '-1.4px' }}>This card has supporting text below as a natural lead-in to additional content.</p>
                                        </div>
                                    </div></div></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
