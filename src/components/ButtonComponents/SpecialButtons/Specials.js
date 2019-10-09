import React from "react"
import SpecialButton from '../SpecialButtons/SpecialButton'
import { specials } from '../../../data'
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state

  return (
    <div>
        {specials.map((button, index) => (
          <SpecialButton key={index} value={button} />
        ))}
    </div>
  );
};

export default Specials
