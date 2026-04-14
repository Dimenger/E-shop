export interface ElectroPanel {
  id: string;
  title: string;
  phase: number;
  color: string;
  material: string;
  price: number;
  in_stock: boolean;
  sku: string;
}

// Описание того, что присылает API (весь объект из db.json)
export interface ElectroApiResponse {
  electro_panels: ElectroPanel[];
}
