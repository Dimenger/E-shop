// PanelList.tsx
import { type ElectroPanelModel } from "../model/types";
import { PanelCard } from "./PanelCard";

interface Props {
  items: ElectroPanelModel[]; // Описываем, что компонент ждет items
}

export const PanelList = ({ items }: Props) => {
  // Принимаем items
  if (items.length === 0) return <div>Щиты не найдены</div>;

  return (
    <div style={{ display: "grid", gap: "20px" }}>
      {items.map((item) => (
        <PanelCard key={item.id} item={item} />
      ))}
    </div>
  );
};
