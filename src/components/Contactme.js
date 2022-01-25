import React from 'react';

export default function Contactme() {
 
    let myStyle = {
        
        backgroundColor: '#111214',
        color : 'white',
        border: '1px solid #cccccc ',
        borderColor: '#182233',
        borderRadius: '15px',
        // height: '57px',
        marginBottom: '0px',
        width : '100%',
        display: 'block',
        boxSizing: 'border-box',
        padding : '16px 35px',
        backgroundColor:'rgba(29, 40, 56, 0.25)'
    }

     let Span ={
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
        textTransform : 'uppercase',
        // backgroundColor:'#000'
     }
    return (
        <div className="container my-3 " style={{maxWidth:'700px'}} >
            <div className="row">
                <div className="col-md-12 mx-auto">
                    <div className="row">
                        <div className="col">
                            <span className=" badge my-3" style={Span} >Contact</span>
                            <h1 className="mb-5" style={{fontSize: '80px',fontWeight:' 400', lineHeight: '106%',  letterSpacing: '-1.4px'}}>
                                Get in touch
                            </h1>
                            <p className="mb-5" style={{ maxWidth:'620px',color: '#616d7e' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi repudiandae itaque est dolore sequi obcaecati, atque magni doloremque, voluptate provident dolorem ut qui enim aliquam, molestiae eos voluptates commodi nam!
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <form>
                                <div className="mb-3">
                                    <input type="text" style={myStyle} className="form-control" id="exampleInputEmail1" placeholder="First Name" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3" >
                                    <input type="text" style={myStyle} className="form-control" id="exampleInputEmail1" placeholder="Last Name" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" style={myStyle} className="form-control" id="exampleInputEmail1" placeholder="Email Address" aria-describedby="emailHelp" />
                                </div>
                                <textarea className="form-control" style={myStyle} placeholder="Your Message" rows="5"></textarea>

                                <button type="submit" className="btn btn-primary my-5" style={{borderRadius:'15px', padding:'20px 50px'}}>Submit</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
