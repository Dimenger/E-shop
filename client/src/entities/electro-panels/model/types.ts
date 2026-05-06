export interface Enclosure {
  id: number;
  model_id: number;
  type: "surface" | "flush";
  name: string;
  width: number;
  height: number;
  depth: number;
  niche: string | null;
}

export interface Component {
  id: number;
  model_id: number;
  name: string;
  type: string;
  is_persistent: boolean;
}

export interface ElectroPanelModel {
  id: number;
  slug: string;
  title: string;
  description: string;
  max_modules: number;
  din_rails: number;
  power_variants: string[];
  has_vacation_mode: boolean;
  warranty: string;
  features: string[];
  rooms: string;
  // Эти поля появятся при запросе с _embed
  enclosures?: Enclosure[];
  components?: Component[];
}

export interface ApiResponse<T = null> {
  success: boolean;
  status: number;
  message?: string;
  data?: T;
}

// Описание ответа API для списка всех моделей
export interface ElectroApiResponse {
  shield_models: ElectroPanelModel[];
}
