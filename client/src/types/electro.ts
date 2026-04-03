export interface ElectroPanel {
  id: string; // string для json-server, в Postgres обычно SERIAL или UUID
  title: string; // Название товара
  brand: string; // Производитель
  model: string; // Линейка/Серия
  modules: number; // Кол-во модулей (целое число)
  protection_class: string; // Например, IP44, IP65
  price: number; // Цена
  in_stock: boolean; // Наличие (true/false)
  material: string; // Материал корпуса
  sku: string; // Артикул для склада
}

// Описание того, что присылает API (весь объект из db.json)
export interface ElectroApiResponse {
  electro_panels: ElectroPanel[];
}
