import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import web from "../src/images/logo2.svg"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoogle, faGooglePlus, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
 

const Contact = () => {

  function handleSubmitAnshul(e) {
    e.preventDefault();
      alert(
       ' migs.anshul@gmail.com'
      );
  }

  function handleSubmitArpit(e) {
    e.preventDefault();
      alert(
       'arpitg9671@gmail.com'
      );
  }

  function handleSubmitMam(e) {
    e.preventDefault();
      alert(
       ' sapnagambhir@gmail.com'
      );
  }

  return (
    <>
      <section id="header" style={{"height" : "80vh"}}   className="d-flex align-items-center ">
        
      <div className="container-fluid">
        <div className="row ">
          <div className="col-11 mx-auto">
          
            <div className="row pl-3" >
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>Learn And Grow With <strong className="brand-name">DSAVER</strong></h1>
                <h2 className="my-3">
                  <p className="objective"><strong>You can contact us :-</strong></p>
                  <p>Mr. Anshul Miglani<br/>
                   
                    <span className="mx-2 "><a style={{color: "white"}} href="https://www.instagram.com/anshul_miglani_/"  target="_blank" ><FontAwesomeIcon className="px-1 insta" icon={faInstagram} /></a></span>
                    <span className="mx-2"><a className="fontawe"  href="https://www.linkedin.com/in/anshul-miglani-36aa671b4" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></span>
                    <span className="mx-2"><a className="fontawe"  style={{color:"red"}} onClick={handleSubmitAnshul} ><FontAwesomeIcon icon={faGoogle} /></a></span>
                  <hr/></p>
                  <p>Mr. Arpit Garg<br/>
                  
                  <span className="mx-2  "><a style={{color: "white"}} href="https://www.instagram.com/_arpit__garg_/"  target="_blank" ><FontAwesomeIcon className="px-1 insta" icon={faInstagram} /></a></span>
                    <span className="mx-2  "><a className="fontawe"  href="https://www.linkedin.com/in/arpit-garg-738a81194" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></span>
                    <span className="mx-2  "><a className="fontawe"  style={{color: "red"}} onClick={handleSubmitArpit}><FontAwesomeIcon icon={faGoogle} /></a></span>
                  <hr/></p>
                  <p>Dr. Sapna Gambhir<br/>
                  
                   
                    <span className="mx-2"><a className="fontawe"  href="https://www.linkedin.com/in/dr-sapna-gambhir-a593b18" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></span>
                    <span className="mx-2"><a className="fontawe"  style={{color: "red"}} onClick={handleSubmitMam}><FontAwesomeIcon icon={faGoogle} /></a></span>
                  </p>
                </h2>
                
              </div>
              <div className="col-lg-6 order-2 order-lg-2 header-img my-5">
                <img src={web} className="img-fluid animated" width="600" alt="Dsaver logo"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </section>

    

{/*
    <section id="header" style={{"height" : "30vh"}} className="d-flex align-items-center ">
      <div className="container-fluid nav_bg">
          <div className="row ">
            <div className="col-6 mx-auto">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Feedback</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                
                <button type="submit" class="btn btn-primary ">Submit</button>
                
                
            </form>   
          </div>
        </div>
      </div>
    </section>
*/}
    </>
  );
};

export default Contact;
