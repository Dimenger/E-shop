// SinglePhasePage.tsx
import { useGetElectroPanelsQuery } from "@/entities/electro-panels/api"; // ваш хук из createApi
import { PanelList } from "@/entities/electro-panels/ui/PanelList";

export const ThreePhasePage = () => {
  // Хук вернет данные из кэша (прогретого лоадером)
  const { data: models = [], isLoading, error } = useGetElectroPanelsQuery();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки</div>;

  return (
    <div>
      <h1>Однофазные электрощиты</h1>
      {/* Теперь models точно будет массивом, даже если он пустой */}
      <PanelList items={models} />
    </div>
  );
};
