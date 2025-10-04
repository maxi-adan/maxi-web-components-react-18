import { MsSidebar, MsButton } from "maxi-react-components";
import { useState } from "react";

const Sidebar = () => {
  const [visibleContent, setVisibleContent] = useState(false);
  return (
    <>
      
      <MsButton label="Show" variant="secondary" onClickEvent={() => setVisibleContent(true)} />
      <MsSidebar
        visible={visibleContent}
        onHide={() => setVisibleContent(false)}
        content="true"
      >
        <div slot="content" style={{ padding: "1rem" }}>
          <h2>Custom Header</h2>
          <p>Custom Content</p>
          <MsButton
            label="Close"
            onClickEvent={() => setVisibleContent(false)}
            variant="success"
          />
        </div>
      </MsSidebar>
    </>
  );
};

export default Sidebar;
