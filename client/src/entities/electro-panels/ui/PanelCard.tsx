import type { ElectroPanel } from "../model/types";

interface Props {
  item: ElectroPanel;
}

export const PanelCard = ({ item }: Props) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>phase: {item.phase}</p>
      <p>price: {item.price}</p>
    </div>
  );
};
