'use client'; // Add this directive at the top

'use client'; // Add this directive at the top

import React, { useState } from 'react';
import { Radio, RadioGroup } from '@nextui-org/react';

const RadioGroupComponent = ({vals}) => {
  const [selectedValue, setSelectedValue] = useState(vals[0]); // Initialize with the first value

  const handleChange = (event) => {
    const value = event.target.value; // Extract the value from the event
    setSelectedValue(value);
    console.log(value); // Log the selected value to the console
  };

  return (
    <div className="flex flex-col gap-2 justify-center py-8 w-full">
      <RadioGroup value={selectedValue} onChange={handleChange} className="p-3">
        {vals.map((value, index) => (
          <Radio size='md' key={index} value={value} className="border border-gray-300  items-center rounded mb-3 p-2 px-2 max-w-full w-full">
            {value}
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
};

export default RadioGroupComponent;
