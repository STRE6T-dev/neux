import {RadioGroup, Radio} from "@nextui-org/radio";
export default function App() {
  return (
    <RadioGroup label="Options" defaultValue="A">
        <div className="bg-white p-4 rounded shadow-md w-full">
            <Radio value="A">Option A</Radio>
            <Radio value="B">Option B</Radio>
            <Radio value="C">Option C</Radio>
            <Radio value="D">Option D</Radio>
        </div>
      
    </RadioGroup>
  );
}
