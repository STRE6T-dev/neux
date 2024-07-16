"use client";

import { RadioGroup } from "@nextui-org/radio";


const RadioButtonPage ({values}) => {
  const [selectedValue,setSelectedValue] = usestate([]);

  const handleRadioChange = (newSelectedValue) =>{
    setSelectedValue(newSelectedValue);
  };

  const values = ['Dynamic', 'Option 2', 'Refernce','Static Ip'];


  return(
    <div>
      <RadioGroup 
      value={values}
      selectedValues={selectedValues}
      onChange={handleCheckboxChange}
        >
            
      </RadioGroup>
    </div>
  );

}