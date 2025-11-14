import { MsMultiselect } from "maxi-react-components";
import { useState } from "react";

const MultiSelect = () => {
  const [selectedItems, setSelectedItems] = useState([
    { label: "New York", value: "1" },
    { label: "CDMX", value: "3" },
  ]);
  const options = [
    { label: "New York", value: "1" },
    { label: "San Francisco", value: "2" },
    { label: "CDMX", value: "3" },
    { label: "Guanajuato", value: "4" },
  ];
  return (
    <>
      <MsMultiselect
        label="Multi Select"
        onSelected={(e: any) => setSelectedItems(e.detail)}
        options={options}
        placeholder="Select options"
        value={selectedItems}
      />
    </>
  );
};

export default MultiSelect;
