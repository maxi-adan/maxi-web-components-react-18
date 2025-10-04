import { MsCard, MsButton } from "maxi-react-components";

const Card = () => {
  return (
    <>
     
      <MsCard>
        <h1 slot="titleComponent">Card Title</h1>

        <h2 slot="subTitle">Card Subtitle</h2>

        <div slot="header" className="card-image-container">
          <img
            alt="Card"
            src="https://primefaces.org/cdn/primereact/images/usercard.png"
            className="card-image"
          ></img>
        </div>

        <p>This is the basic card content.</p>

        <div style={{ paddingBottom: "1rem" }} className="btns" slot="footer">
          <MsButton
            onClickEvent={() => {}}
            label="Cancel"
            variant="danger"
          ></MsButton>
          &nbsp;
          <MsButton variant="success" label="Accept" onClick={() => {}}></MsButton>
        </div>
      </MsCard>
    </>
  );
};

export default Card;
