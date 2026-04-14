import { PanelCard } from "./PanelCard";
import type { ElectroPanel } from "../model/types";

interface Props {
  items: ElectroPanel[];
}

export const PanelList = ({ items }: Props) => {
  return (
    <div>
      {items.map((item) => (
        <PanelCard key={item.id} item={item} />
      ))}
    </div>
  );
};
