// components/RadioButtons.js
import React from 'react';

const RadioButtons = () => {
  return (
    <div className="bg-white p-4 rounded shadow-md w-full">
      <div className="border border-gray-300 rounded mb-2 p-2">
        <label className="inline-flex items-center">
          <input type="radio" className="form-radio text-indigo-600" name="option" value="1" />
          <span className="ml-2">Option 1</span>
        </label>
      </div>
      <div className="border border-gray-300 rounded mb-2 p-2">
        <label className="inline-flex items-center">
          <input type="radio" className="form-radio text-indigo-600" name="option" value="2" />
          <span className="ml-2">Option 2</span>
        </label>
      </div>
      <div className="border border-gray-300 rounded mb-2 p-2">
        <label className="inline-flex items-center">
          <input type="radio" className="form-radio text-indigo-600" name="option" value="3" />
          <span className="ml-2">Option 3</span>
        </label>
      </div>
    </div>
  );
};

export default RadioButtons;
