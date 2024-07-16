
import {ContentBox} from "@/components/contentBox";
import { Checkbox } from "@nextui-org/checkbox";
import {CheckboxGroup} from "@nextui-org/react";


const CheckGroup = ({ values, selectedValues, onChange }) => {
  const handleChange = (value) => {
    const currentIndex = selectedValues.indexOf(value);
    const newSelectedValues = [...selectedValues];

    if (currentIndex === -1) {
      newSelectedValues.push(value);
    } else {
      newSelectedValues.splice(currentIndex, 1);
    }

    onChange(newSelectedValues);
  };
  return (
    <div className="flex flex-col gap-2 justify-center py-8 w-full">
      <div
         className="p-3"
        >
          {values.map((value) => (
          <Checkbox
            key={value}
            checked={selectedValues.includes(value)}
            onChange={() => handleChange(value)}
            className="border border-gray-300  items-center rounded mb-4 p-2 px-2 max-w-full w-full"
          >
            {value}
          </Checkbox>
        ))}
      </div>
    
  </div>
  );
};

export default CheckGroup;
