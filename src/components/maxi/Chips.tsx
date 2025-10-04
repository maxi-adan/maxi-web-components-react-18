import { MsChips } from "maxi-react-components";
import { useState } from "react";

const Chips = () => {
  const [chipsValue, setChipsValue] = useState(["Chip 1", "Chip 2", "Chip 3"]);
  return (
    <>
     
      <MsChips
        onChangeEvent={(e: any) => setChipsValue(e.detail)}
        placeholder="Enter values"
        value={chipsValue}
        separator=","
      />
    </>
  );
};

export default Chips;
