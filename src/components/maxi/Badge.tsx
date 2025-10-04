import { MsBadge } from "maxi-react-components";

const Badge = () => {
  return (
    <>
 
      <MsBadge value="Basic" severity="basic" />
      <MsBadge value="Info" severity="info" />
      <MsBadge value="Success" severity="success" />
      <MsBadge value="Warning" severity="warning" />
      <MsBadge value="Alert" severity="danger" />
    </>
  );
};

export default Badge;
