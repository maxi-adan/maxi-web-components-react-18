import { useState } from "react";
import { MsDropdown } from "maxi-react-components";

const options = [
  {
    label: "USA",
    value: "1",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png",
  },
  {
    label: "México",
    value: "2",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png",
  },
  {
    label: "Colombia",
    value: "3",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/200px-Flag_of_Colombia.svg.png",
  },
  {
    label: "Canada",
    value: "4",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/800px-Flag_of_Canada_%28Pantone%29.svg.png",
  },
  {
    label: "Venezuela",
    value: "5",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/255px-Flag_of_Venezuela.svg.png",
  },
];

const Dropdown = () => {
  const [dropdownValue, setDropdownValue] = useState(null);
  return (
    <>
      <MsDropdown
        label="Dropdown"
        filter
        value={dropdownValue}
        placeholder="Select an option"
        options={options}
        onSelected={(e: any) => {
          setDropdownValue(e.detail.value);
        }}
      />
    </>
  );
};

export default Dropdown;
