import { getProducts } from "../api/api";

export const getSinglePhaseLoader = async () => {
  return await getProducts("http://localhost:3000/single-phase");
};
