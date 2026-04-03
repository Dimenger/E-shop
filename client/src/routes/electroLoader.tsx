import axios from "axios";
import type { ElectroPanel } from "../types/electro";

export const electroLoader = async (): Promise<ElectroPanel[]> => {
  const response = await axios.get<ElectroPanel[]>(
    "http://localhost:3000/electro_panels",
  );

  return response.data;
};

/*

// src/components/electro/electro-loader.ts
import axios from "axios";
import type { LoaderFunctionArgs } from "react-router";
import type { ElectroPanel } from "../../types/electro";

export const electroLoader = async ({ request }: LoaderFunctionArgs): Promise<ElectroPanel[]> => {
  // Axios автоматически кинет ошибку, если статус не 2xx
  const response = await axios.get<ElectroPanel[]>("http://localhost:3000/electro_panels");
  
  // Возвращаем только массив данных
  return response.data;
}
*/
