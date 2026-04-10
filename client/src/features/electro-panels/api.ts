import axios from "axios";
import type { ElectroPanel } from "./types";

export const getProducts = async (
  endpoint: string,
): Promise<ElectroPanel[]> => {
  const response = await axios.get<ElectroPanel[]>(endpoint);

  return response.data;
};
