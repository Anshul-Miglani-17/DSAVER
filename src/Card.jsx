import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Card = (props) => {
  return (
    <>
      <div className="cmain col-md-4 col-12 mx-auto">
      <div className="" >
        
  <div className="card-body">
  <h2 className="nmain card-title text-center pb-3">{props.name}</h2>
  <p className="card-text">{props.content}</p>
  <NavLink to={props.link} target="_blank" className="btn btn-primary d-flex justify-content-center mx-5">Explore</NavLink>
  </div>        
</div>




      </div>
    </>
  );
};

export default Card;
