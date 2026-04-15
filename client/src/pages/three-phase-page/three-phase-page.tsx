import { PanelList } from "@/entities/electro-panels/ui/PanelList";
import { useAppSelector } from "@/app/hooks";

export const ThreePhasePage = () => {
  // const dispatch = useAppDispatch();

  const { items, isLoading, error } = useAppSelector(
    (state) => state.electroPanels,
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>ThreePhasePage</h1>
      <PanelList items={items} />
    </div>
  );
};
