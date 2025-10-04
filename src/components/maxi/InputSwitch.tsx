import { useState } from "react";
import { MsInputSwitch } from "maxi-react-components";

const InputSwitch = () => {
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <>
      
      <MsInputSwitch
        checked={switchValue}
        onChangeEvent={(e) => setSwitchValue(e.detail)}
      />
    </>
  );
};

export default InputSwitch;
