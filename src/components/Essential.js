import React from 'react';


export default function Essential() {

let ess = {
    marginBottom: '32px',
    color: '#fff',
    fontSize: '80px',
    lineHeight: '106%',
    fontWeight: '500',
    letterSpacing: '-1.4px'
}

let bigbox = {
    backgroundColor: '#000',
    // display: 'flex',
    padding: '65px 10% 50px',
    flexDirection: 'column',
    alignItems: 'left',
    borderRadius: '15px',
    backgroundImage: 'linear-gradient(140deg, rgba(29, 40, 56, 0.5), rgba(29, 40, 56, 0.25))',
    textAlign: 'left',
    justifyContent: 'flex-start'
}

let Span = {
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
    textTransform: 'uppercase' ,
    alignItems:'left'
    // justifyContent: 'left'
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
    textAlign: 'center',
    color:'white',
    cursor: 'pointer', 
    padding: '16px 35px'
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

let blockquote = {
    marginBottom: '32px',
    marginLeft: '18px',
    padding: '0px 24px',
    borderLeft: '2px solid #3183ff',
    color: '#fff',
    fontSize: '20px',
    lineHeight: '175%',
    fontStyle: 'italic',
    backgroundImage: 'linear-gradient(140deg, rgba(29, 40, 56, 0.5),#182233)',
    backgroundColor: '#000'
}

return (
    <>
        <div className="container my-5"  >
            <div className="row">
                <div className="col-8  " style={bigbox} >
                <span className=" badge my-3" style={Span} >Service</span>
                        <h1 className="mb-5" style={ess}>
                            Essentials
                        </h1>
                        <p className="mb-5" style={{ maxWidth: '860px', color: '#616d7e', textAlign: 'left' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi repudiandae itaque est dolore sequi obcaecati, atque magni doloremque, voluptate provident dolorem ut qui enim aliquam, molestiae eos voluptates commodi nam!
                        </p>
                        <p className="mb-5" style={{ maxWidth: '860px', color: '#616d7e', textAlign: 'left' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi repudiandae itaque est dolore sequi obcaecati, atque magni doloremque, voluptate provident dolorem ut qui enim aliquam, molestiae eos voluptates commodi nam!
                        </p>
                        <div className="card" style={blockquote} >
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            {/* <a href="#" className="btn btn-primary stretched-link">Go somewhere</a> */}
                        </div>
                    </div>
                    <p className="mb-5" style={{ maxWidth: '860px', color: '#616d7e', textAlign: 'left' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi repudiandae itaque est dolore sequi obcaecati, atque magni doloremque, voluptate provident dolorem ut qui enim aliquam, molestiae eos voluptates commodi nam!
                        </p>
                </div>
                <div className="col-4 ">
                <div className="card" style={bblock}>
                            <img src="assets/images/blue.jpg" className="card-img-top mt-5" style={{width:'180px'}} alt="imgBlock" />
                            <div className="card-body">
                                <h6 className="card-title mb-3"style={{fontSize:'28px',lineHeight:' 106%',fontWeight:' 540',letterSpacing: '-1px'}}>$ 39.00 USD</h6>
                                <p className="card-text mb-3"style={{color:'#616d7e',textAlign: 'center'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul className="list-styled mb-3"style={{textAlign:'center'}}>
                                <li className="mb-3"><b> An item</b></li>
                                <li className="mb-3"><b>A second item</b></li>
                                <li className="mb-3"><b>A third item</b></li>
                            </ul>
                            <div className="card-body">
                             <button className="btn-primary mb-3"style={btn}>Add to Cart</button>
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
