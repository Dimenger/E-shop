import { store } from "@/app/store";
import { fetchElectroPanels } from "../api/api";

export const singlePhaseLoader = async () => {
  const { electroPanels } = store.getState();

  if (electroPanels.items.length === 0) {
    await store.dispatch(fetchElectroPanels());
  }

  return null;
};

// “почему loader возвращает null?”
// const data = useLoaderData();
// данные идут в Redux, а не в компонент
// return просто обязателен синтаксически
