import { MsTooltip, MsBadge } from "maxi-react-components";

const Tooltip = () => {
  return (
    <>
    
      <div style={{ display: "flex", gap: "10px" }}>
        <MsTooltip position="right" content="This is a tooltip">
          <MsBadge value="Hover me" severity="success" />
        </MsTooltip>
      </div>
    </>
  );
};

export default Tooltip;
