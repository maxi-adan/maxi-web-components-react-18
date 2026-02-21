import { MsKnob } from "maxi-react-components";

const Knob = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <MsKnob value={25}  min={0} max={100} step={1} size={60}  />
      <MsKnob value={60}  min={0} max={100} step={1} size={100} valueColor="#10B981" rangeColor="#D1FAE5" textColor="#065F46" />
     </div>
  );
};

export default Knob;
