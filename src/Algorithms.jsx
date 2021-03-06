import React from "react";
import Card from "./Card";
import Bubble from "./algos/Bubble";
import "./index.css";

const Algorithms = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"><strong>Algorithms</strong></h1>
      </div>
      
      <div className="container-fluid ">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row gy-4 gx-1">
              
              <Card name="Selection Sort" content="This algorithm sorts an array by repeatedly finding the minimum element from unsorted part and putting it at the beginning." link="/algorithm/Selection" />
              <Card name="Bubble Sort" content="Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order." link="/algorithm/bubble" />
              <Card name="Insertion Sort" content="Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands." link="/algorithm/Insertion" />
              <Card name="Merge Sort" content="Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves" link="/algorithm/MergeSort" />
              <Card name="QuickSort" content="QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot." link="/algorithm/QuickSort" />
              

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Algorithms;
