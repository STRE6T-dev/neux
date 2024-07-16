// components/RadioButtons.js
import { Radio, RadioGroup } from '@nextui-org/radio';
import React from 'react';

const RadioButtons = () => {
  return (
    <div className="bg-white p-4 rounded shadow-md w-full">
      <RadioGroup>
          <div className="border border-gray-300 rounded mb-2 p-2">
              <Radio value={"A"}>Dynamic</Radio>
          </div>

          <div className="border border-gray-300 rounded mb-2 p-2">
              <Radio value={"B"}>Dynamic</Radio>
          </div>

          <div className="border border-gray-300 rounded mb-2 p-2">
              <Radio value={"C"}>Dynamic</Radio>
          </div>

          <div className="border border-gray-300 rounded mb-2 p-2">
              <Radio value={"D"}>Dynamic</Radio>
          </div>
      </RadioGroup>
    </div>
  );
};

export default RadioButtons;
