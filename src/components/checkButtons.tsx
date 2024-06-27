// components/RadioButtons.js
import { Checkbox } from '@nextui-org/checkbox';
import React from 'react';

const CheckButtons = () => {
  return (
    <div className="bg-white p-4 rounded shadow-md w-full">
      <div className="border border-gray-300 rounded mb-2 p-2">
            <Checkbox defaultSelected>Option 1</Checkbox>
      </div>

      <div className="border border-gray-300 rounded mb-2 p-2">
            <Checkbox defaultSelected>Option 2</Checkbox>
      </div>


      <div className="border border-gray-300 rounded mb-2 p-2">
            <Checkbox defaultSelected>Option 3</Checkbox>
      </div>

    </div>



  );
};

export default CheckButtons;