import { MsBreadcrumb } from "maxi-react-components";

const Breadcrumb = () => {

    const items = [
        { label: "Dashboard" },
        { label: "Transactions" },
        { label: "Payment Processing" },
        { label: "Invoice Details" }
      ];
    
      const homeWithTemplate = { 
        template: "<span style='color: #043F8F; font-weight: bold;'>🏠 Home</span>"
      };
    
      return (
        <MsBreadcrumb 
          model={items} 
          home={homeWithTemplate}
        />
      );
}

export default Breadcrumb;