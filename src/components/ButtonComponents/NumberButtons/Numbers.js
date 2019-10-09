import React, {useState} from "react";
import { numbers } from '../../../data'
import  NumberButton  from '../NumberButtons/NumberButton'
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file


const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [Numbers, setNumbers] =  useState(numbers);
  return (
    <div>
        {numbers.map((button, index) => (
          <NumberButton key={index} value={button} showValue = {props.showValue} />
        ))}
    </div>
  );
};

export default Numbers
