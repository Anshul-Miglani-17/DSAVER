import { findByDisplayValue } from "@testing-library/react";  
import React from "react";
import "../index.css";
import InsertionCode from "../codes/InsertionCode.jsx";
import Visualizer from "../visualizer/Visualizer.js";
 
const Codecoll = (props) =>{
    return(
        <>
<div className="accordion" id="accordionExample">
  <div className="card">
    <div className="codecollcss" id="headingOne">
      <h2 className="codecollcss mb-0">
        <button className="codecollcss btn btn-block text-mid" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          <h3 className="codecollcss">Code</h3>
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="nicheWala card-body">

    {props.code}
        
      </div>
    </div>
  </div>

  <div className="card">
    <div className="" id="headingTwo">
      <h2 className="codecollvis mb-0">
        <button className="codecollvis btn btn-block text-mid collapsed" target="_blank" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <h3 className="codecollvis" >Visualisation</h3>
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse " aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="nicheWala card-body">
        {props.vis}
        
      </div>
    </div>
  </div>
  
</div>
        </>
    );
};

export default Codecoll;