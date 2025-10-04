import { MsSkeleton } from "maxi-react-components";

const Skeleton = () => {
  return (
    <div className="skeleton-showcase">
      <MsSkeleton height="1rem" />
      <MsSkeleton width="10rem" height="1rem" />
      <MsSkeleton width="5rem" height="1rem" />
      <MsSkeleton width="100%" height="2rem" />
      <MsSkeleton width="10rem" height="4rem" />
    </div>
  );
};

export default Skeleton;
