import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import web from "/home/anshul_m/Desktop/DSAVER/src/images/logo.jpeg"

const About = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row ">
          <div className="col-11 mx-auto">
            <div className="row pl-3" >
              <div className="col-md-6 pb-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>Learn And Grow With <strong className="brand-name">DSAVER</strong></h1>
                <h2 className="my-3">
                <p>DSAVER is a user interactive website in which we take input from users and visualises the selected algorithm according to their choice with their input in it.</p>
                <p><strong className="objective">The objective of this website is :-</strong> <br/>
When we have started learning data structure and sorting algorithms we find it very difficult to understand on our own. So, the objective of this project is to provide students a platform to learn and understand complex algorithms in easy and attractive manner.</p>
                </h2>
                <div className="mt-3">
                  <NavLink to="/contact" className="btn-get-started ">
                    Contact Us
                  </NavLink >
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img ">
                
                <img src={web} className="img-fluid animated" width="600" alt="Dsaver logo"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
