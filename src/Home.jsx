import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import web from "../src/images/logo3.svg"

const Home = () => {
  return (
    <>

      <section id="header" className="d-flex align-items-center">
        <div className="container">
          <div className="row ">
            {/* <div className="col-12 ">
            <div className="row pl-4" > */}
            <div className="col pt-5 mt-5 pr-5 d-flex justify-content-center flex-column">
              <img src={web} className="img-fluid animated " width="600" alt="Dsaver logo" />
            </div>
            <div className="col-5 d-flex justify-content-center flex-column">
              <h1>Learn And Grow With <strong className="brand-name">DSAVER</strong></h1>
              <h2 className="my-3">
                Explore ,read ,learn and visualise COMPLEX ALGORITHMS at your own rate.
              </h2>
              <div className="mt-3">
                <NavLink to="/algo" className="btn-get-started ">
                  Explore Algos
                </NavLink >
              </div>
            </div>
            <div className="col pt-5 mt-5 d-flex justify-content-center flex-column ">
              <img src={web} className="img-fluid animated" width="600" alt="Dsaver logo" />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
