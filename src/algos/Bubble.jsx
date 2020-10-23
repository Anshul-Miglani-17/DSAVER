import React from "react";
import web from "../images/bubblesort.png";
import Codecoll from "./Codecoll";
import Bubblecode from "../codes/Bubblecode"
import Visualizer from "../visualizer/Visualizer.js";
 
 
const Bubble = () =>{
    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Bubble Sort</h1>
            </div>
            <div className="container-fluid ">
                <div className="row my-5">
                    <div className="col-10 mx-auto">
                        <h5>
                            <p>Bubble sort is also known as sinking sort. This algorithm compares each pair of adjacent items and swaps them if they are in the wrong order, and this same process goes on until no swaps are needed.</p>
                            <p>You can modify Bubble sort for descending order and can also sort strings. The bubble sort algorithm isn't efficient as its average-case complexity  and worst-case complexity is O(n2).</p>
                            <p>Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order. </p>
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
                                    
                                    <p className="nicheWala">First Pass: <br/>( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1. <br/>( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4 <br/>( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2 <br/>( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.</p>
                                    <p className="nicheWala">Second Pass: <br/>( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ) <br/>( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2 <br/>( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) <br/>( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 ) <br/>Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.</p>
                                    <p className="nicheWala">Third Pass: <br/>( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) <br/>( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) <br/>( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) <br/>( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )</p>
                                </div>
                            </div>
                            <br/>
                            <p>To understand how Bubble sort works, refer to the below image.    </p>
                            <div className="d-flex justify-content-center"><img src={web} alt="insertion img"/></div>
                            <br/>
                            <Codecoll code={<Bubblecode/>} vis={<Visualizer />}/>

                        </h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Bubble;