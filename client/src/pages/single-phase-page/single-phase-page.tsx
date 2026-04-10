import { useLoaderData } from "react-router";
import type { getSinglePhaseLoader } from "../../features/loaders/getSinglePhase.loader";
import { ElectroList } from "../../features/electro-panels/components/ElectroList";

export const SinglePhasePage = () => {
  const items = useLoaderData<typeof getSinglePhaseLoader>();
  return (
    <div>
      <h1>SinglePhasePage</h1>
      <ElectroList items={items} />
    </div>
  );
};
