import { useState } from "react";
import { MsInputNumber } from "maxi-react-components";

const InputNumber = () => {
  const [inputValue, setInputValue] = useState(151351);
  return (
    <>
      <MsInputNumber
        onChangeEvent={(e: any) => setInputValue(e.detail)}
        label="Input Number"
        minFractionDigits="2"
        mode="currency"
        value={inputValue}
      />
    </>
  );
};

export default InputNumber;
