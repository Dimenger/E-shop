import { getProducts } from "../api/api";

export const getThreePhaseLoader = async () => {
  return await getProducts("http://localhost:3000/three-phase");
};
