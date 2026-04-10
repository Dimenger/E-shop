import { getProducts } from "../electro-panels/api";

export const getSinglePhaseLoader = async () => {
  return await getProducts("http://localhost:3000/single-phase");
};
