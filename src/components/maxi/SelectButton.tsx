import { MsSelectButton } from "maxi-react-components";

const SelectButton = () => {
    const options = ["Option 1", "Option 2", "Option 3"];

    return (
        <div style={{ width: "100%" }}>
            <MsSelectButton
                options={options}
                value="Option 1"
            />
        </div>
    );
}

export default SelectButton;
