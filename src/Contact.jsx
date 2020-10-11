import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import web from "../src/images/logo2.svg"

const Contact = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center ">
        
      <div className="container-fluid">
        <div className="row ">
          <div className="col-11 mx-auto">
          
            <div className="row pl-3" >
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>Learn And Grow With <strong className="brand-name">DSAVER</strong></h1>
                <h2 className="my-3">
                  <p className="objective"><strong>You can contact us :-</strong></p>
                  <p>Anshul<br/>migs.anshul@gmail.com</p>
                  <p>Arpit<br/>arpitg9671@gmail.com</p>
                  <p>Dr. Sapna Gambhir<br/>sapnagambhir@gmail.com</p>
                </h2>
                
              </div>
              <div className="col-lg-6 order-2 order-lg-2 header-img">
                <img src={web} className="img-fluid animated" width="600" alt="Dsaver logo"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </section>


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
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
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
    
    </>
  );
};

export default Contact;
