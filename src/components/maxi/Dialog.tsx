import { MsDialog, MsButton } from "maxi-react-components";
import { useState } from "react";

const Dialog = () => {
  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>

      <MsButton label="Open dialog" variant="outline-primary" onClick={() => setVisible(true)} />

      <MsDialog
        visible={visible}
        onHide={() => setVisible(false)}
        styleComponent="width:30rem"
        showFooter
      >
        <div slot="header">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img
              width="44"
              src="https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg"
              alt="header"
            />{" "}
            <span>Dialog</span>
          </div>
        </div>
        <p>
          This is a pure HTML and CSS dialog box built with Stencil. You can use
          the slot to include custom content.
        </p>
        <div slot="footer">
          <MsButton label="Close" onClick={handleClose} />
        </div>
      </MsDialog>
    </>
  );
};

export default Dialog;
