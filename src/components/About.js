import React from 'react';

export default function About() {

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
        cursor:'text'
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

    let Con = {
        maxWidth: '840px',
        alignItems: 'flex-start',
        borderRadius: '15px',
        display: 'flex',
        backgroundImage: 'linear-gradient(140deg, rgba(29, 40, 56, 0.5), rgba(29, 40, 56, 0.25))',
        textAlign: 'left',
        flexDirection: 'column',
        minHeight: '370px',
        padding: '55px 55px 25px',
        boxSizing: 'border-box',
        color: '#616d7e',
        backgroundColor: '#000',
        opacity: '1',
        fontSize: '18px',
        lineHeight: '180%'
    }

    let mCon = {

        backgroundImage: 'linear-gradient(140deg, #1d2838, rgba(29, 40, 56, 0.5))',
        backgroundColor: '#000',
        opacity: '1',
        textAlign: 'left',
        display: 'flex',
        padding: '28px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: '15px',
        boxSizing: 'border-box',
        // fontFamily: 'Inter, sans-serif',
        color: ' #616d7e',
        minHeight: '100px',
    }

    let Img = {
        width: '100%',
        borderRadius: '15px',
        backgroundImage: 'linear-gradient(140deg, rgba(29, 40, 56, 0.5), rgba(29, 40, 56, 0.25))',
        maxWidth: '100%',
        verticalAlign: 'middle',
        display: 'inline-block',
        border: ' 0',
        boxSizing: 'border-box',
        objectFit: 'cover',
        backgroundColor: '#000'
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
        backgroundImage: ' linear-gradient(140deg , rgba(29, 40, 56, 0.5), #182233)',
        textAlign: 'center',
        backgroundColor: ' #000'
    }

    return (
        <>
            <div className="container my-3" style={{ maxWidth: '840px' }}>

                <div className="row">
                    <div className="col">
                        <span className=" badge my-3" style={Span} >About</span>
                        <h1 className="mb-5" style={{ fontSize: '80px', fontWeight: ' 500', lineHeight: '106%', letterSpacing: '-1.4px' }}>
                            Who we are and why we're doing this
                        </h1>
                        <p className="mb-5" style={{ maxWidth: '780px', color: '#616d7e' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi repudiandae itaque est dolore sequi obcaecati, atque magni doloremque, voluptate provident dolorem ut qui enim aliquam, molestiae eos voluptates commodi nam!
                        </p>
                    </div>
                </div>
            </div>

            <div className="container my-3" >
                <div className="row mb-5">
                    <div className="col-md-6">
                        <div className="card" style={Con}>
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: 'white', fontSize: '40px' }}>Our Mission</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card" style={Con}>
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: 'white', fontSize: '40px' }}>Our Role</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="card" style={Con}>
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: 'white', fontSize: '40px' }}>Our Values</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col">
                                <div className="card mb-3" style={mCon}>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: 'white', fontSize: '40px' }}>1.8M+</h5>
                                        <p className="card-text">Wallet Installs</p>
                                    </div>
                                </div></div>

                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card" style={mCon}>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: 'white', fontSize: '40px' }}>2.4GB</h5>
                                        <p className="card-text">Created Assets</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col">
                                <div className="card mb-3" style={mCon}>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: 'white', fontSize: '40px' }}>58.8M</h5>
                                        <p className="card-text">Market Place Volumn</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card" style={mCon}>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: 'white', fontSize: '40px' }}>120+</h5>
                                        <p className="card-text">Partners WorldWide</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5" style={{ maxWidth: '840px', textAlign: 'left' }}>
                <h2 className="mb-3" style={{ fontSize: '60px', fontWeight: '400', lineHeight: '106%', letterSpacing: '-1.4px' }} >
                    We are a community of passionate humans building a distributed cloud
                </h2>
                <p className="mb-4" style={{ color: '#616d7e' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia pariatur itaque optio et alias odio magni cupiditate porro, totam sint, ut voluptate eligendi, excepturi ipsum earum culpa quisquam? Explicabo, corporis.
                </p>
                <p className="mb-5" style={{ color: '#616d7e' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga accusantium distinctio officiis animi, exercitationem itaque illo nihil ullam est atque unde recusandae? Maiores dolores eos ad eveniet earum, id aliquam!
                </p>
            </div>

            <div className="container my-5" >
                <div className="row my-3">
                    <div className="col-md-3" >
                        <div className="card-group">
                            <div className="card" style={{ backgroundColor: '#000' }}>
                                <img src="assets/images/icon.png" className="card-img-top" style={Img} alt=" " />
                                <div className="card-body">
                                    <h5 className="card-title">Name of a person</h5>
                                    <p className="card-text"><small className="text-muted">Co-Founder</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card-group">
                            <div className="card" style={{ backgroundColor: '#000' }}>
                                <img src="assets/images/icon.png" className="card-img-top" style={Img} alt=" " />
                                <div className="card-body">
                                    <h5 className="card-title">Name of a person</h5>
                                    <p className="card-text"><small className="text-muted">Co-Founder</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card-group">
                            <div className="card" style={{ backgroundColor: '#000' }}>
                                <img src="assets/images/icon.png" className="card-img-top" style={Img} alt=" " />
                                <div className="card-body">
                                    <h5 className="card-title">Name of a person</h5>
                                    <p className="card-text"><small className="text-muted">Co-Founder</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card-group">
                            <div className="card" style={{ backgroundColor: '#000' }}>
                                <img src="assets/images/icon.png" className="card-img-top" style={Img} alt=" " />
                                <div className="card-body">
                                    <h5 className="card-title">Name of a person</h5>
                                    <p className="card-text"><small className="text-muted">Co-Founder</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-3">
                        <div className="card-group">
                            <div className="card" style={{ backgroundColor: '#000' }}>
                                <img src="assets/images/icon.png" className="card-img-top" style={Img} alt=" " />
                                <div className="card-body">
                                    <h5 className="card-title">Name of a person</h5>
                                    <p className="card-text"><small className="text-muted">Co-Founder</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card-group">
                            <div className="card" style={{ backgroundColor: '#000' }}>
                                <img src="assets/images/icon.png" className="card-img-top" style={Img} alt=" " />
                                <div className="card-body">
                                    <h5 className="card-title">Name of a person</h5>
                                    <p className="card-text"><small className="text-muted">Co-Founder</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card-group">
                            <div className="card" style={{ backgroundColor: '#000' }}>
                                <img src="assets/images/icon.png" className="card-img-top" style={Img} alt=" " />
                                <div className="card-body">
                                    <h5 className="card-title">Name of a person</h5>
                                    <p className="card-text"><small className="text-muted">Co-Founder</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card-group">
                            <div className="card" style={{ backgroundColor: '#000' }}>
                                <img src="assets/images/icon.png" className="card-img-top" style={Img} alt=" " />
                                <div className="card-body">
                                    <h5 className="card-title">Name of a person</h5>
                                    <p className="card-text"><small className="text-muted">Co-founder</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="card text-center" style={ban}>
                    <div className="card-body">
                        <h5 className="card-title mb-5" style={{ color: '#fff', fontSize: ' 52px', lineHeight: '110%', fontWeight: '500', letterSpacing: ' -0.8px' }}>Stay informed and never miss a Core update! </h5>
                        {/* <div className="mb-3">
                            <div className="row">
                                <div className="col-md-5"> 
                                    <input type="email " style={myStyle} className="form-control" id="exampleInputEmail1" placeholder="Your email address " aria-describedby="emailHelp" />
                                </div>
                                <div className="col-md-4 ">
                                <a href="/" className="btn btn-primary" style={{cursor:'pointer', padding: '16px 35px',borderRadius: '15px',  backgroundColor: '#3183ff',  backgroundImage:' linear-gradient(150deg , transparent, #0751bf) '}}> Subscribe </a>

                                </div>
                            </div>

                        </div> */}
                        <div class="container">
                            <form class="d-flex ">
                                <input class="form-control me-3 " style={myStyle} type="email" placeholder="Your email address" aria-label="Search" />
                                <button className="btn btn-primary" style={{cursor:'pointer', padding: '16px 35px',borderRadius: '15px',  backgroundColor: '#3183ff',  backgroundImage:' linear-gradient(150deg , transparent, #0751bf) '}}> Subscribe </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}
