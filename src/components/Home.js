import React from 'react';

export default function Home() {

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
  let sbtn = {
    padding: '16px 35px',
    borderRadius: '15px',
    backgroundColor: '#3183ff',
    backgroundImage: 'linear-gradient(150deg, transparent, #0751bf)',
    display: 'inline-block',
    cursor: 'pointer'
  }
  let simg = {
    alignItems: ' center',
    borderRadius: '15px',
    backgroundImage: 'linear-gradient(140deg, #1d2838, rgba(29, 40, 56, 0.5))',
    display: 'flex',
    width: '70px',
    height: ' 70px',
    marginBottom: '26px',
    boxSizing: 'border-box',
    maxWidth: '100px',
    backgroundColor: '#000',
    justifyContent: 'center',
    backgroundColor: "#000"


  }

  return (
    <>
      <div className="container my-3" style={{ maxWidth: '920px' }}>
        <div className="container my-5 text-center">
          <div className="row text-center">
            <div className="col">
              {/* <span className=" badge my-3" style={Span} >Technology</span> */}
              <h1 className="mb-5" style={{ fontSize: '92px', fontWeight: ' 500', lineHeight: '103%', letterSpacing: '-1.4px' }}>
                Build on Blockchain like never before
              </h1>

              <p className="mb-5  " style={{ justifyContent: 'center', color: '#616d7e' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi repudiandae itaque est dolore sequi obcaecati, atque magni doloremque, voluptate provident dolorem ut qui enim aliquam, molestiae eos voluptates commodi nam!
              </p>
              <button className="btn btn-primary" style={sbtn}><b> Subscribe </b></button>

            </div>
          </div>
        </div>
      </div>
      <div className="container my-5" style={{ width: '100%', height: '500px', display: 'block' }}>
        <img src="" alt="bgimg" />
      </div>

      <div className="container my-3" style={{ maxWidth: '920px' }}>
        <div className="container text-center">
          <div className="row text-center">
            <div className="col">
              <span className=" badge my-3" style={Span} >Solving</span>
              <h1 className="mb-5" style={{ fontSize: '80px', fontWeight: ' 500', lineHeight: '106%', letterSpacing: '-1.4px' }}>
                Powerful new features for solving challenges
              </h1>
              {/* <p className="mb-5  " style={{ maxWidth: '880px', color: '#616d7e' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi repudiandae itaque est dolore sequi obcaecati, atque magni doloremque, voluptate provident dolorem ut qui enim aliquam, molestiae eos voluptates commodi nam!
                            </p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3 d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <div className="card-group">
              <div className="card" style={{ backgroundColor: '#000', justifyContent: 'center' }}  >
                <div className="container" style={simg}>
                  <img src="assets/images/icon.png" className="card-img-top" style={{ height: '30px', width: '30px' }} alt=" " />
                </div>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#fff', fontSize: '24px', lineHeight: '130%', fontWeight: '500', letterSpacing: '-0.5px' }}><b>Money</b></h5>
                  {/* <p className="card-text"><small className="text-muted">Co-Founder</small></p> */}
                  <p className="card-text" style={{ color: '#616d7e' }}>  Impedit odit ex architecto magnam asperiores, enim nisi. Fuga possimus offici sit aliquam quo saepe sunt quidem! </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-group">
              <div className="card" style={{ backgroundColor: '#000', justifyContent: 'center' }}  >
                <div className="container" style={simg}>
                  <img src="assets/images/icon.png" className="card-img-top" style={{ height: '30px', width: '30px' }} alt=" " />
                </div>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#fff', fontSize: '24px', lineHeight: '130%', fontWeight: '500', letterSpacing: '-0.5px' }}><b>Security</b></h5>
                  {/* <p className="card-text"><small className="text-muted">Co-Founder</small></p> */}
                  <p className="card-text" style={{ color: '#616d7e' }}>  Impedit odit ex architecto magnam asperiores, enim nisi. Fuga possimus offici sit aliquam quo saepe sunt quidem! </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card-group d-flex justify-content-center">
              <div className="card" style={{ backgroundColor: '#000', justifyContent: 'center' }}>
                <div className="container" style={simg}>
                  <img src="assets/images/icon.png" className="card-img-top" style={{ height: '30px', width: '30px' }} alt=" " />
                </div>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#fff', fontSize: '24px', lineHeight: '130%', fontWeight: '500', letterSpacing: '-0.5px' }}><b>Goverence</b></h5>
                  {/* <p className="card-text"><small className="text-muted">Co-Founder</small></p> */}
                  <p className="card-text" style={{ color: '#616d7e' }}>  Impedit odit ex architecto magnam asperiores, enim nisi. Fuga possimus offici sit aliquam quo saepe sunt quidem! </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="container mb-5 d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <div className="card-group d-flex justify-content-center">
              <div className="card" style={{ backgroundColor: '#000', justifyContent: 'center' }}>
                <div className="container" style={simg}>
                  <img src="assets/images/icon.png" className="card-img-top" style={{ height: '30px', width: '30px' }} alt=" " /></div>                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#fff', fontSize: '24px', lineHeight: '130%', fontWeight: '500', letterSpacing: '-0.5px' }}><b>Agency</b></h5>
                  {/* <p className="card-text"><small className="text-muted">Co-Founder</small></p> */}
                  <p className="card-text" style={{ color: '#616d7e' }}>  Impedit odit ex architecto magnam asperiores, enim nisi. Fuga possimus offici sit aliquam quo saepe sunt quidem! </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-group d-flex justify-content-center">
              <div className="card" style={{ backgroundColor: '#000', justifyContent: 'center' }}>
                <div className="container" style={simg}>
                  <img src="assets/images/icon.png" className="card-img-top" style={{ height: '30px', width: '30px' }} alt=" " /></div>                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#fff', fontSize: '24px', lineHeight: '130%', fontWeight: '500', letterSpacing: '-0.5px' }}><b>Relibility</b></h5>
                  {/* <p className="card-text"><small className="text-muted">Co-Founder</small></p> */}
                  <p className="card-text" style={{ color: '#616d7e' }}>  Impedit odit ex architecto magnam asperiores, enim nisi. Fuga possimus offici sit aliquam quo saepe sunt quidem! </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-group d-flex justify-content-center">
              <div className="card" style={{ backgroundColor: '#000', justifyContent: 'center' }}>
                <div className="container" style={simg}>
                  <img src="assets/images/icon.png" className="card-img-top" style={{ height: '30px', width: '30px' }} alt=" " />
                </div>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#fff', fontSize: '24px', lineHeight: '130%', fontWeight: '500', letterSpacing: '-0.5px' }}><b>Interoperability</b></h5>
                  {/* <p className="card-text"><small className="text-muted">Co-Founder</small></p> */}
                  <p className="card-text" style={{ color: '#616d7e' }}>  Impedit odit ex architecto magnam asperiores, enim nisi. Fuga possimus offici sit aliquam quo saepe sunt quidem! </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="container"></div>


      <div className="container my-5">
        <div className="card text-center" style={ban}>
          <div className="card-body">
            <h5 className="card-title mb-5" style={{ color: '#fff', fontSize: ' 52px', lineHeight: '110%', fontWeight: '500', letterSpacing: ' -0.8px' }}>Stay informed and never miss a Core update! </h5>
            <div className="container  d-flex justify-content-center ">
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
