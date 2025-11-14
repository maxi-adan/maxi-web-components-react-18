import { MsSidebar, MsButton } from "maxi-react-components";
import { useState } from "react";

const Sidebar = () => {
  const [visibleContent, setVisibleContent] = useState(false);
  return (
    <>
      <MsButton
        label="Show"
        variant="secondary"
        onClickEvent={() => setVisibleContent(true)}
      />
      <MsSidebar
        visible={visibleContent}
        onHide={() => setVisibleContent(false)}
        content="true"
      >
        <div slot="content" style={{ padding: "1rem" }}>
          <h2>Custom Header</h2>
          <p style={{ marginBottom: "1rem" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            quae quibusdam consectetur at. Aut inventore, quo dolorum suscipit
            velit illo repellendus placeat cupiditate? Corporis dolore quam
            accusantium iure, in nobis eaque autem blanditiis amet nulla
            accusamus quae natus hic perferendis atque. Ipsum dolore repellat
            error provident delectus consectetur fugit ullam aspernatur
            deserunt, blanditiis aliquid dolor atque nihil!
          </p>
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
