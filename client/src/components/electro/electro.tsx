// components/electro/electro.tsx
import { useLoaderData } from "react-router";
import type { electroLoader } from "../../routes/electroLoader";

export const Electro = () => {
  // TS теперь знает, что items — это массив ElectroPanel
  const items = useLoaderData<typeof electroLoader>();

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h3>
            {item.title} ({item.brand})
          </h3>
          <p>
            Цена: {item.price} руб. | Защита: {item.protection_class}
          </p>
        </div>
      ))}
    </div>
  );
};
