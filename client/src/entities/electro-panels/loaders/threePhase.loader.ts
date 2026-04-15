import { store } from "@/app/store";
import { fetchElectroPanels } from "../api/api";

export const threePhaseLoader = async () => {
  await store.dispatch(fetchElectroPanels());
  return null;
};
