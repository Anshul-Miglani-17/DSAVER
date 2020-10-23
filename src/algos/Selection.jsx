import React from "react";
import web from "../images/selectionsort.png";
import Codecoll from "./Codecoll";
import Selectioncode from "../codes/Selectioncode"
import Visualizer from "../visualizer/Visualizer.js";
 
 
const Selection = () =>{
    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Selection Sort</h1>
            </div>
            <div className="container-fluid ">
                <div className="row my-5">
                    <div className="col-10 mx-auto">
                        <h5>
                            <p>In Selection sort, the smallest element is exchanged with the first element of the unsorted list of elements (the exchanged element takes the place where smallest element is initially placed). Then the second smallest element is exchanged with the second element of the unsorted list of elements and so on until all the elements are sorted.</p>
                            <p>The average and worst-case complexity of this algorithm are O(n2), where n is the number of elements.</p>
                            <br/>
                            <div className=" d-flex justify-content-center ">
                            <p>
                                <button className="btn btn-primary " type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    Example
                                </button>
                            </p>
                            </div>
                            <div className="collapse" id="collapseExample">
                                <div className="nicheWala card card-body ">                                    
                                    <p className="nicheWala">Entered elements: 22 0 -90 89 17<br/>Step 1: -90 0 22 89 17 (22 and -90 exchanged position)<br/>Step 2: -90 0 22 89 17 (0 is at right place, no exchange needed)<br/>Step 3: -90 0 17 89 22 (22 and 17 exchanged position)<br/>Step 4: -90 0 17 22 89 (89 and 22 exchanged position)</p>
                                </div>
                            </div>
                            <br/>
                            <p>To understand how Selection sort works, refer to the below image.    </p>
                            <div className="d-flex justify-content-center"><img src={web} alt="Selection img"/></div>
                            <br/>
                            <Codecoll code={<Selectioncode/>} vis={<Visualizer />}/>

                        </h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Selection;