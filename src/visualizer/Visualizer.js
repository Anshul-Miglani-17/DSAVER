import React, { useState, useEffect, useRef } from 'react';
import "./Hello.css"
import { getQuickSortAnimations } from '../algorithmVis/QuickSort.jsx';
import { getInsertionSortAnimations } from '../algorithmVis/InsertionSort.jsx';
import { getMergeSortAnimations } from '../algorithmVis/MergeSort.jsx';
import { getBubbleSortAnimations } from '../algorithmVis/BubbleSort.jsx';
import { getSelectionSortAnimations } from '../algorithmVis/SelectionSort.jsx';

const MIN_NUM = 5;
const MAX_NUM = 80;

const ACCESSED_COLOUR = 'turquoise';
const SORTED_COLOUR = '#00539CFF';

export default function SortVisualizer(props) {
  
  
  function handleSubmit(e) {
    e.preventDefault();
     ARR_LEN=data.bars;
    if(data.bars>200){
      alert(
       ' No. of bars should be less than 200.'
      );
    }
    if(data.speed>1000){
      alert(
       ' Time should be less than 1000 ms (1sec).'
      );
    }
    }

  const InputEvent = (event) => {
      const {name , value} = event.target;
      setdata((preVal)=>{
        return{
          ...preVal,
        [name]:value,
        }
        
      })
  }

  const [data,setdata] = useState({
    bars:'100',
    speed:'15',
  })
  var DELAY = data.speed;
  var ARR_LEN=data.bars;
  const [arr, setArr] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const containerRef = useRef(null);

  useEffect(initialiseArray, []);

  function initialiseArray() {
    
    if (isSorting) return;
    if (isSorted) resetArrayColour();
    setIsSorted(false);
    const arr = [];
    for (let i = 0; i < ARR_LEN; i++) {
      arr.push((MAX_NUM - MIN_NUM) * (i / ARR_LEN) + MIN_NUM);
    }
    shuffle(arr);
    setArr(arr);
  }

  function mergeSort() {
    const animations = getMergeSortAnimations(arr);
    animateArrayUpdate(animations);
  }

  function insertionSort(props) {
    const animations = getInsertionSortAnimations(arr);
    animateArrayUpdate(animations);
    
  }

  function quickSort() {
    const animations = getQuickSortAnimations(arr);
    animateArrayUpdate(animations);
  }

  function bubbleSort() {
    const animations = getBubbleSortAnimations(arr);
    animateArrayUpdate(animations);
  }

  function selectionSort() {
    const animations = getSelectionSortAnimations(arr);
    animateArrayUpdate(animations);
  }
  
  function animateArrayUpdate(animations) {
    if (isSorting) return;
    setIsSorting(true);
    animations.forEach(([comparison, swapped], index) => {
      setTimeout(() => {
        if (!swapped) {
          if (comparison.length === 2) {
            const [i, j] = comparison;
            animateArrayAccess(i);
            animateArrayAccess(j);
          } else {
            const [i] = comparison;
            animateArrayAccess(i);
          }
        } else {
          setArr((prevArr) => {
            const [k, newValue] = comparison;
            const newArr = [...prevArr];
            newArr[k] = newValue;
            return newArr;
          });
        }
      }, index * DELAY);
    });
    setTimeout(() => {
      animateSortedArray();
    }, animations.length * DELAY);
  }

  function animateArrayAccess(index) {
    const arrayBars = containerRef.current.children;
    const arrayBarStyle = arrayBars[index].style;
    setTimeout(() => {
      arrayBarStyle.backgroundColor = "#00B1D2FF";
    }, DELAY);
    setTimeout(() => {
      arrayBarStyle.backgroundColor = '#00539CFF';
    }, DELAY * 2);
  }

  function animateSortedArray() {
    const arrayBars = containerRef.current.children;
    for (let i = 0; i < arrayBars.length; i++) {
      const arrayBarStyle = arrayBars[i].style;
      setTimeout(
        () => (arrayBarStyle.backgroundColor = SORTED_COLOUR),
        i * DELAY,
      );
    }
    setTimeout(() => {
      setIsSorted(true);
      setIsSorting(false);
    }, arrayBars.length * DELAY);
  }

  function resetArrayColour() {
    const arrayBars = containerRef.current.children;
    for (let i = 0; i < arr.length; i++) {
      const arrayBarStyle = arrayBars[i].style;
      arrayBarStyle.backgroundColor = "";
    }
  }
 
  
  return (
    <div className="nicheWala visualizer-container ">

<div className="app-footer">
<form onSubmit={handleSubmit} className="nicheWala">
  Enter no. of bars -
      <input className="in-bor mx-2" type="text" placeholder="enter no. of bars" name="bars" value={data.bars} onChange={InputEvent} />
  
 
  
            Time (in ms) -
            <input className="in-bor mx-2" type="text" placeholder="enter time in ms" name="speed" value={data.speed} onChange={InputEvent} />
            <button className=" btn-primary btn mx-2" onClick={initialiseArray} >
              set
            </button>
  </form>
  </div>
      <div className="nicheWala array-container" ref={containerRef}>
        {arr.map((barHeight, index) => (
          <div
            className="array-bar"
            style={{
              
              height: `${barHeight}vmin`,
              width: `${100 / ARR_LEN}vw`,
            }}
            key={index}
          ></div>
        ))}
      </div>
      
      <footer className="app-footer">
        <ul className="nicheWala">
          <li className="nicheWala">
            <button className="btn-primary btn" onClick={initialiseArray}>
              Create new array
            </button>
          </li>
          
          <li className="nicheWala" >
            <button className="mx-2 btn-primary btn" onClick={mergeSort}>
              Merge sort
            </button>
          </li>

          <li className="nicheWala" >
            <button className="mx-2 btn-primary btn" onClick={bubbleSort}>
              Bubble sort
            </button>
          </li>

          <li className="nicheWala" >
            <button className="mx-2 btn-primary btn" onClick={selectionSort}>
              Selection sort
            </button>
          </li>


          <li className="nicheWala" >  
            <button className="mx-2 btn-primary btn" onClick={insertionSort}>
              Insertion Sort
            </button>
          </li>
          <li className="nicheWala">
            <button className="btn btn-primary" onClick={quickSort}>
              Quick sort
            </button>
        </li>
       
        </ul>
      </footer>
    </div>
  );
}

const shuffle = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
};