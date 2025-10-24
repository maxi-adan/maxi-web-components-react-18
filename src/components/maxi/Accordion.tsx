import { MsAccordion } from "maxi-react-components";

const Accordion = () => {
     // Handler para cambio general
  const handleTabChange = (event: any) => {
    const { index, isOpen, activeIndexes } = event.detail;
    console.log(`Tab ${index} ${isOpen ? "opened" : "closed"}`);
    console.log("Tabs active:", activeIndexes);
  };

  // Handler para apertura
  const handleTabOpen = (event: any) => {
    const { index, activeIndexes } = event.detail;
    console.log(`Tab ${index} opened!`);
    console.log("Tabs active:", activeIndexes);
  };

  // Handler para cierre
  const handleTabClose = (event: any) => {
    const { index, activeIndexes } = event.detail;
    console.log(`Tab ${index} closed!`);
    console.log("Tabs active:", activeIndexes);
  };

  const contentTabs = [
    {
      header: "Tab One",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      header: (
        <>
          <img
            width="24"
            height="24"
            alt="avatar"
            src="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
            data-pc-section="image"
          />
          <span className="accordion-custom-header-content-text">Amy Elsner</span>
          <span className="accordion-custom-badge" data-pc-name="badge" data-pc-section="root">
            3
          </span>
        </>
      ),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      header: "Tab Three",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const custommizedContent = (tab: any, index: any) => {
    return (
      <>
        <div slot={`header-${index}`}>{tab.header}</div>
        <div slot={`content-${index}`}>{tab.content}</div>
      </>
    );
  };
  return (
    <MsAccordion
      onTabChange={handleTabChange}
      onTabOpen={handleTabOpen}
      onTabClose={handleTabClose}
      headerClass="custom-header-alternative"
      contentClass="custom-content"
      multiple={true}
    >
      {contentTabs.map((tab, index) => custommizedContent(tab, index))}
    </MsAccordion>
  );
}

export default Accordion;