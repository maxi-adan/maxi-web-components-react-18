import { MsMeterGroup } from "maxi-react-components";

const MeterGroup = () => {
    const values = [
        { label: "Apps", value: 35, color: "#10B981" },
        { label: "Documents", value: 20, color: "#3B82F6" },
        { label: "Free Space", value: 45, color: "#E5E7EB" }
    ];

    return (
        <div style={{ width: "100%", padding: "10px" }}>
            <MsMeterGroup values={values} />
        </div>
    );
}

export default MeterGroup;
