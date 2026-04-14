import { useLoaderData } from "react-router";
import type { getSinglePhaseLoader } from "@/entities/electro-panels/loaders/getSinglePhase.loader";
import { PanelList } from "@/entities/electro-panels/ui/PanelList";

export const SinglePhasePage = () => {
  const items = useLoaderData<typeof getSinglePhaseLoader>();
  return (
    <div>
      <h1>SinglePhasePage</h1>
      <PanelList items={items} />
    </div>
  );
};
