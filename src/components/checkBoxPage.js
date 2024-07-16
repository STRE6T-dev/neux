'use client'
// pages/index.js (or any other page/component)
import { useState } from 'react';
import ContentBox from './contentBox';
import CheckGroup from "@/components/checkboxGroup";

const CheckboxPage = ({values}) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxChange = (newSelectedValues) => {
    setSelectedValues(newSelectedValues);
  };


  return (
    <div>
        <CheckGroup
          values={values}
          selectedValues={selectedValues}
          onChange={handleCheckboxChange}
        />
    </div>
  );
};

export default CheckboxPage;
