import React from "react";
import "../index.css";
import web from "../images/insertion1.png";
import Codecoll from "./Codecoll";
 
const Insertion = () =>{
    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Insertion Sort</h1>
            </div>
            <div className="container-fluid ">
                <div className="row my-5">
                    <div className="col-10 mx-auto">
                        <h5>
                            <p>Insertion Sort is a sorting algorithm where the array is sorted by taking one element at a time. The principle behind insertion sort is to take one element, iterate through the sorted array & find its correct position in the sorted array.</p>
                            <p>In each iteration, it compares the current element with the values in the sorted array. If the current element is greater than the element in the array, then it leaves the element and iterates to the next array element. Otherwise, if the current element is smaller than the array element then it moves the rest of the element in the array by one position and makes space for the current in the sorted array.</p>
                            <p>This is how Insertion sort takes one input elements at a time, iterates through the sorted sub-array and with each iteration it inserts one element at its correct position. This is why the algorithm is known as Insertion sort.</p>
                            <p>As the average & worst-case complexity of this algorithm are <strong>O(n2)</strong>, where n is the number of elements, Insertion sort is not good for large data sets.</p>
                            <div className=" d-flex justify-content-center ">
                            <p>
                                <button className="btn btn-primary " type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    Algorithm
                                </button>
                            </p>
                            </div>
                            <div className="collapse" id="collapseExample">
                                <div className="nicheWala card card-body ">
                                    <ul className="nicheWala">
                                        <li className="nicheWala">Step 1 − If the element is the first one, it is already sorted.</li>
                                        <li className="nicheWala">Step 2 – Move to next element</li>
                                        <li className="nicheWala">Step 3 − Compare the current element with all elements in the sorted array</li>
                                        <li className="nicheWala">Step 4 – If the element in the sorted array is smaller than the current element, iterate to the next element. Otherwise, shift all the greater element in the array by one position towards the right</li>
                                        <li className="nicheWala">Step 5 − Insert the value at the correct position</li>
                                        <li className="nicheWala">Step 6 − Repeat until the complete list is sorted</li>
                                    </ul>
                                </div>
                            </div>
                            <br/>   
                            <p>To understand how Insertion sort works, refer to the below image.    </p>
                            <div className="d-flex justify-content-center"><img width="600" height="600" src={web} alt="insertion img"/></div>
                            <br/>
                            <br/>
                            
                            <Codecoll/>


                            


                        </h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Insertion;