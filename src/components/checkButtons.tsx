// components/RadioButtons.js
import { Checkbox } from '@nextui-org/checkbox';
import React from 'react';


const test = "Hello";

const CheckButtons = () => {
  return (
    <div className="bg-white p-4 rounded shadow-md w-full">
      <div className="border border-gray-300  items-center rounded mb-3 p-2">
            <Checkbox defaultSelected>{test}</Checkbox>
      </div>

      <div className="border border-gray-300 rounded mb-3 p-2">
            <Checkbox defaultSelected>Option 2</Checkbox>
      </div>


      <div className="border border-gray-300 rounded mb-3 p-2">
            <Checkbox defaultSelected>Option 3</Checkbox>
      </div>


      <div className="border border-gray-300 rounded mb-3 p-2">
            <Checkbox defaultSelected>Option 4</Checkbox>
      </div>


    </div>



  );
};

export default CheckButtons;