import { useLoaderData } from "react-router";
import type { getThreePhaseLoader } from "@/entities/electro-panels/loaders/getThreePhase.loader";
import { PanelList } from "@/entities/electro-panels/ui/PanelList";

export const ThreePhasePage = () => {
  const items = useLoaderData<typeof getThreePhaseLoader>();
  return (
    <div>
      <h1>ThreePhasePage</h1>
      <PanelList items={items} />
    </div>
  );
};
