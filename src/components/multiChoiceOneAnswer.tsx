import RadioGroupComponent from './radioGroup'; // Ensure correct import path
import CheckBoxPage from './CheckBoxPage'; // Ensure correct import path

export default function Answers() {
  const vals = ['Dynami', 'This is radio button', 'Refernce', 'Static Inernet Protocol'];

  // Check if 'Dynamic' is in the vals array
  const hasDynamic = vals.includes('Dynamic');

  if (hasDynamic == true) {
    return <RadioGroupComponent vals={vals} />;
  } else {
    return <CheckBoxPage values={vals}/>;
  }
  
}
