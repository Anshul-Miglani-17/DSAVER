import React from "react";
import web from "../images/quicksort.png";
import Codecoll from "./Codecoll";
import Quicksortcode from "../codes/Quicksortcode"
import Quicksortexample from "../codes/Quicksortexample";
import Visualizer from "../visualizer/Visualizer.js";
 
 
const Quicksort = () =>{
    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Quick Sort</h1>
            </div>
            <div className="container-fluid ">
                <div className="row my-5">
                    <div className="col-10 mx-auto">
                        <h5>
                            <p>Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.<br/>    1.	Always pick first element as pivot.<br/>    2.	Always pick last element as pivot (implemented below)<br/>    3.	Pick a random element as pivot.<br/>    4.	Pick median as pivot.<br/>The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.</p>
                            <br/>
                            <div className=" d-flex justify-content-center ">
                            <p>
                                <button className="btn btn-primary " type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    Illustration Of Partition
                                </button>
                            </p>
                            </div>
                            <div className="collapse" id="collapseExample">
                                <div className="nicheWala card card-body ">
                                    <Quicksortexample/>
                                </div>
                            </div>
                            <br/>
                            <p>To understand how partition works in QuickSort, refer to the below image.    </p>
                            <div className="d-flex justify-content-center"><img src={web} alt="QuickSort img"/></div>
                            <br/>
                            <Codecoll code={<Quicksortcode/>} vis={<Visualizer />}/>

                        </h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Quicksort;