import { useState } from "react";
import { MsCheckbox } from "maxi-react-components";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
    
      <MsCheckbox
        label="Option 1"
        checked={checked}
        onCheckboxChange={(e: any) => setChecked(e.detail)}
      />
    </>
  );
};

export default Checkbox;
