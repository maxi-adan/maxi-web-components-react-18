import { useState } from "react";
import { MsInputField } from "maxi-react-components";

const InputField = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <MsInputField
        label="Input Field"
        value={value}
        onChangeEvent={(e: any) => setValue(e.detail)}
      />
    </>
  );
};

export default InputField;
