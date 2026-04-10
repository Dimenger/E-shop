import type { ElectroPanel } from "../types";

interface Props {
  item: ElectroPanel;
}

export const ElectroCard = ({ item }: Props) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>price: {item.price}</p>
    </div>
  );
};
