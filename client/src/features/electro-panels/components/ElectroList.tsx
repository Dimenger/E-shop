import { ElectroCard } from "./ElectroCard";
import type { ElectroPanel } from "../types";

interface Props {
  items: ElectroPanel[];
}

export const ElectroList = ({ items }: Props) => {
  return (
    <div>
      {items.map((item) => (
        <ElectroCard key={item.id} item={item} />
      ))}
    </div>
  );
};
