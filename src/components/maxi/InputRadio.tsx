import { MsRadio } from "maxi-react-components";
import { useState } from "react";

const InputRadio = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.value);
  };
  return (
    <>
      
      <MsRadio
        idRadio="yesId"
        name="decision"
        value="yes"
        onRadioChange={handleChange}
        checked={value === "yes"}
        label="Yes"
      />
      <MsRadio
        idRadio="noId"
        name="decision"
        value="no"
        onRadioChange={handleChange}
        checked={value === "no"}
        label="No"
      />
    </>
  );
};

export default InputRadio;
