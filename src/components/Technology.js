import React from 'react';

export default function Technology() {


    let myStyle = {

        color: 'white',
        border: '1px solid #cccccc ',
        borderColor: '#182233',
        borderRadius: '15px',
        display: 'block',
        padding: '16px 35px',
        backgroundColor: 'rgba(29, 40, 56, 0.25)',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'text',
        maxWidth: '320px'
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


    let ban = {
        position: ' relative',
        display: 'flex',
        overflow: 'hidden',
        width: '100%',
        padding: '100px 10%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: ' 15px',
        backgroundImage: ' linear-gradient(140deg , rgba(29, 40, 56, 0.5),  #182233)',
        textAlign: 'center',
        backgroundColor: ' #000'
    }

    let block = {
        display: 'flex',
        padding: '55px 10% 25px',
        alignItems: 'center',
        borderRadius: '15px',
        backgroundImage: 'linear-gradient(140deg, rgba(29, 40, 56, 0.5), rgba(29, 40, 56, 0.25))',
        textAlign: 'center',
        color: '#616d7e',
        backgroundColor: '#000'
    }

    let ppic = {
        width: '44px',
        height: '44px',
        marginBottom: '22px',
        // maxWidth: '100%',
        // verticalAlign: 'middle',
        display: 'inline-block',
        alignItems: ' center',
        justifyContent :'center',
        boxSizing: 'border-box',


    }


    return (
        <>
            <div className="container my-3" style={{ maxWidth: '920px' }}>
                <div className="container text-center">
                    <div className="row text-center">
                        <div className="col">
                            <span className=" badge my-3" style={Span} >Technology</span>
                            <h1 className="mb-5" style={{ fontSize: '80px', fontWeight: ' 500', lineHeight: '106%', letterSpacing: '-1.4px' }}>
                                Secure network protocol for the next web
                            </h1>
                            <p className="mb-5  " style={{ maxWidth: '880px', color: '#616d7e' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi repudiandae itaque est dolore sequi obcaecati, atque magni doloremque, voluptate provident dolorem ut qui enim aliquam, molestiae eos voluptates commodi nam!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5" style={{ maxWidth: '1200px' }}>
                <div className="row mb-3">
                    <div className="col">
                        <div className="card" style={block}>
                            <div className="card-body">
                                <div className="container justify-content-center" >
                  <img src="assets/images/icon.png" className="card-img-top" style={ppic} alt=" " />
                </div>

                                <h5 className="card-title mb-3" style={{ color: 'white', fontSize: '24px', lineHeight: '130%', fontWeight: ' 500', letterSpacing: '-0.5px' }}>Fast & Seemless</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={block}>
                            <div className="card-body">
                                <div className="container justify-content-center" >
                  <img src="assets/images/icon.png" className="card-img-top" style={ppic} alt=" " />
                </div>
                                <h5 className="card-title mb-3" style={{ color: 'white', fontSize: '24px', lineHeight: '130%', fontWeight: ' 500', letterSpacing: '-0.5px' }}>Unique Functionality</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={block}>
                            <div className="card-body">
                                <div className="container justify-content-center" >
                  <img src="assets/images/icon.png" className="card-img-top" style={ppic} alt=" " />
                </div>
                                <h5 className="card-title mb-3" style={{ color: 'white', fontSize: '24px', lineHeight: '130%', fontWeight: ' 500', letterSpacing: '-0.5px' }}>Smart Contracts</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <div className="card" style={block} >
                            <div className="card-body">
                                <div className="container justify-content-center" >
                  <img src="assets/images/icon.png" className="card-img-top" style={ppic} alt=" " />
                </div>
                                <h5 className="card-title mb-3" style={{ color: 'white', fontSize: '24px', lineHeight: '130%', fontWeight: ' 500', letterSpacing: '-0.5px' }}>Build Community</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={block} >
                            <div className="card-body">
                                <div className="container justify-content-center" >
                  <img src="assets/images/icon.png" className="card-img-top" style={ppic} alt=" " />
                </div>
                                <h5 className="card-title mb-3" style={{ color: 'white', fontSize: '24px', lineHeight: '130%', fontWeight: ' 500', letterSpacing: '-0.5px' }}>Secure Financial</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={block} >
                            <div className="card-body">
                                <div className="container justify-content-center" >
                  <img src="assets/images/icon.png" className="card-img-top" style={ppic} alt=" " />
                </div>
                                <h5 className="card-title mb-3" style={{ color: 'white', fontSize: '24px', lineHeight: '130%', fontWeight: ' 500', letterSpacing: '-0.5px' }}>Api Functionality</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container mb-5" style={{ maxWidth: '1200px' }}>
                <div className="row">
                    <div className="col-md-7">
                        <h1>img</h1>
                    </div>
                    <div className="col-md-5" style={{ textAlign: 'left' }}>
                        <span className=" badge my-3" style={Span} >Welcome to Core</span>
                        <h1 className="mb-3" style={{ fontSize: '66px', fontWeight: '500', lineHeight: '106%', letterSpacing: '-1px' }}>
                            Building blocks for next generation internet
                        </h1>
                        <p className="mb-3  " style={{ color: '#616d7e' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi repudiandae itaque est dolore sequi obcaecati, atque magni doloremque, voluptate provident dolorem ut qui enim aliquam, molestiae eos voluptates commodi nam!
                        </p>
                    </div>
                </div>
            </div>

            <div className="container my-5" style={{ maxWidth: '1200px' }}>
                <div className="row">
                    <div className="col-md-5 " style={{ textAlign: 'left' }}>
                        <span className=" badge my-3" style={Span} >Solving</span>
                        <h1 className="mb-3" style={{ fontSize: '66px', fontWeight: '500', lineHeight: '106%', letterSpacing: '-1px' }}>
                            Write smart contracts in a language you already love
                        </h1>
                        <p className="mb-3  " style={{ color: '#616d7e' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi repudiandae itaque est dolore sequi obcaecati, atque magni doloremque, voluptate provident dolorem ut qui enim aliquam, molestiae eos voluptates commodi nam!
                        </p>
                    </div>
                    <div className="col-md-7">
                        <h1>img</h1>
                    </div>
                </div>
            </div>

            <div className="container my-5" style={{ maxWidth: '1200px' }}>
                <div className="row">
                    <div className="col-md-7">
                        <h1>img</h1>
                    </div>
                    <div className="col-md-5 " style={{ textAlign: 'left' }}>
                        <span className=" badge my-3" style={Span} >Developers</span>
                        <h1 className="mb-3" style={{ fontSize: '66px', fontWeight: '500', lineHeight: '106%', letterSpacing: '-1px' }}>
                            Build by developers, for developers
                        </h1>
                        <p className="mb-3  " style={{ color: '#616d7e' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi repudiandae itaque est dolore sequi obcaecati, atque magni doloremque, voluptate provident dolorem ut qui enim aliquam, molestiae eos voluptates commodi nam!
                        </p>
                    </div>
                </div>
            </div>







            <div className="container my-5">
                <div className="card text-center" style={ban}>
                    <div className="card-body">
                        <h5 className="card-title mb-5" style={{ color: '#fff', fontSize: ' 52px', lineHeight: '110%', fontWeight: '500', letterSpacing: ' -0.8px' }}>Stay informed and never miss a Core update! </h5>
                        <div className="container  d-flex justify-content-center">
                            <form className="d-flex ">
                                <input className="form-control me-3 " style={myStyle} type="email" placeholder="Your email address" aria-label="Search" />
                                <button className="btn btn-primary" style={{ cursor: 'pointer', padding: '16px 35px', borderRadius: '15px', backgroundColor: '#3183ff', backgroundImage: ' linear-gradient(150deg , transparent, #0751bf) ' }}> Subscribe </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}


