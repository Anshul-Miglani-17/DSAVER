import React from "react";
import web from "../images/mergesort.png";
import Codecoll from "./Codecoll";
import Mergesortcode from "../codes/Mergesortcode"
import Mergesortexample from "../codes/Mergesortexample";
 
const Mergesort = () =>{
    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Merge Sort</h1>
            </div>
            <div className="container-fluid ">
                <div className="row my-5">
                    <div className="col-10 mx-auto">
                        <h5>
                            <p>Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.</p>
                            <br/>
                            <div className=" d-flex justify-content-center ">
                            <p>
                                <button className="btn btn-primary " type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    Algorithm
                                </button>
                            </p>
                            </div>
                            <div className="collapse" id="collapseExample">
                                <div className="nicheWala card card-body ">
                                    <Mergesortexample/>
                                </div>
                            </div>
                            <br/>
                            <p>The following diagram shows the complete merge sort process for an example array (38, 27, 43, 3, 9, 82, 10). If we take a closer look at the diagram, we can see that the array is recursively divided in two halves till the size becomes 1. Once the size becomes 1, the merge processes comes into action and starts merging arrays back till the complete array is merged.</p>
                            <div className="d-flex justify-content-center"><img src={web} alt="MergeSort img"/></div>
                            <br/>
                            <Codecoll code={<Mergesortcode/>}/>

                        </h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mergesort;