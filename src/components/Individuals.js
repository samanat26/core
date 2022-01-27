import React from 'react';

export default function Individuals() {
  
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

    let smBlock = {
        display: 'block',
        padding: '8px',
        alignItems: 'center',
        borderRadius: '15px',
        backgroundImage: 'linear-gradient(140deg, rgba(29, 40, 56, 0.5),  #182233)',
        textAlign: 'center',
        backgroundColor: '#000',
        maxWidth: '260px',
        alignItems: 'center',

    }

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

    let bblock = {
        display: 'flex',
        padding: '15px 12% 70px',
        alignItems: 'center',
        borderRadius: '15px',
        backgroundImage: 'linear-gradient(140deg, rgba(29, 40, 56, 0.5), #182233)',
        textAlign: 'center',
        color:'white',
        backgroundColor: '#000',
        width:'25rem',
        justifyContent: 'flex-start',
    }
    let btn={
        alignItems: 'center',
        borderRadius: '15px',
        backgroundImage: 'linear-gradient(140deg, rgba(29, 40, 56, 0.5),  #182233)',
        textAlign: 'center',
        color:'white',
        backgroundColor: '#000',
        cursor: 'pointer', 
        padding: '16px 35px'
    }

    return (
        <>
            <div className="container my-5" style={{ maxWidth: '960px', textAlign: 'center' }}>
                <div className="row">
                    <div className="col">
                        <span className=" badge my-3" style={Span} >Catagories</span>
                        <h1 className="mb-5" style={{ fontSize: '80px', fontWeight: ' 500', lineHeight: '106%', letterSpacing: '-1.4px' }}>
                            Individuals
                        </h1>
                        <p className="mb-5" style={{ maxWidth: '860px', color: '#616d7e', textAlign: 'center' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi repudiandae itaque est dolore sequi obcaecati, atque magni doloremque, voluptate provident dolorem ut qui enim aliquam, molestiae eos voluptates commodi nam!
                        </p>
                        <span className="badge " style={smBlock}>
                            <button className="btn me-3" style={{ borderRadius: '15px',color: 'white', cursor: 'pointer' }}><b>Enterprise</b></button>
                            <button className="btn btn-primary" style={{ borderRadius: '15px', cursor: 'pointer' , color: 'white' }}><b>Individuals</b></button>
                        </span>
                    </div>
                </div>
            </div>

            <div className="container my-5" >
                <div className="row my-5">
                    <div className="col-md-4">
                    <div className="card" style={bblock}>
                            <img src="assets/images/blue.jpg" className="card-img-top mt-5" style={{width:'180px'}} alt="imgBlock" />
                            <div className="card-body">
                                <h5 className="card-title my-4"style={{color:'#3183ff',fontSize:'24px',lineHeight:' 130%',fontWeight:' 530',letterSpacing: '-0.5px'  }}>Essentials</h5>
                                <h6 className="card-title mb-3"style={{fontSize:'28px',lineHeight:' 106%',fontWeight:' 540',letterSpacing: '-1px'}}>$ 29.00 USD</h6>
                                <p className="card-text mb-3"style={{color:'#616d7e',textAlign: 'center'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul className="list-styled mb-3"style={{textAlign:'center'}}>
                                <li className="mb-3"><b> An item</b></li>
                                <li className="mb-3"><b>A second item</b></li>
                                <li className="mb-3"><b>A third item</b></li>
                            </ul>
                            <div className="card-body">
                             <button className="btn-outline-primary mb-5"style={btn}>View Plan</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card" style={bblock}>
                            <img src="assets/images/blue.jpg" className="card-img-top mt-5" style={{width:'180px'}} alt="imgBlock" />
                            <div className="card-body">
                                <h5 className="card-title my-4"style={{color:'#3183ff',fontSize:'24px',lineHeight:' 130%',fontWeight:' 530',letterSpacing: '-0.5px'  }}>Standards</h5>
                                <h6 className="card-title mb-3"style={{fontSize:'28px',lineHeight:' 106%',fontWeight:' 540',letterSpacing: '-1px'}}>$ 49.00 USD</h6>
                                <p className="card-text mb-3"style={{color:'#616d7e',textAlign: 'center'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul className="list-styled mb-3"style={{textAlign:'center'}}>
                                <li className="mb-3"><b> An item</b></li>
                                <li className="mb-3"><b>A second item</b></li>
                                <li className="mb-3"><b>A third item</b></li>
                            </ul>
                            <div className="card-body">
                             <button className="btn-outline-primary mb-5"style={btn}>View Plan</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card" style={bblock}>
                            <img src="assets/images/blue.jpg" className="card-img-top mt-5" style={{width:'180px'}} alt="imgBlock" />
                            <div className="card-body">
                                <h5 className="card-title my-4"style={{color:'#3183ff',fontSize:'24px',lineHeight:' 130%',fontWeight:' 530',letterSpacing: '-0.5px'  }}>Professionals</h5>
                                <h6 className="card-title mb-3"style={{fontSize:'28px',lineHeight:' 106%',fontWeight:' 540',letterSpacing: '-1px'}}>$ 149.00 USD</h6>
                                <p className="card-text mb-3"style={{color:'#616d7e',textAlign: 'center'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul className="list-styled mb-3"style={{textAlign:'center'}}>
                                <li className="mb-3"><b> An item</b></li>
                                <li className="mb-3"><b>A second item</b></li>
                                <li className="mb-3"><b>A third item</b></li>
                            </ul>
                            <div className="card-body">
                             <button className="btn-outline-primary mb-5"style={btn}>View Plan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container my-5">
                <div className="card text-center" style={ban}>
                    <div className="card-body">
                        <h5 className="card-title mb-5" style={{ color: '#fff', fontSize: ' 52px', lineHeight: '110%', fontWeight: '500', letterSpacing: ' -0.8px' }}>Stay informed and never miss a Core update! </h5>
                        <div className="container d-flex justify-content-center">
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
