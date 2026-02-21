import { MsInputPassword } from "maxi-react-components";

const InputPassword = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
                <MsInputPassword 
                    label="Password" 
                    toggleMask={true} 
                    feedback={true} 
                />
            </div>
        </div>
    );
}

export default InputPassword;
