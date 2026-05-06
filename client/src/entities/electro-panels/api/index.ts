import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ElectroPanelModel } from "../model/types";

export const electroApi = createApi({
  reducerPath: "electroApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    // Запрос на получение всех панелей
    getElectroPanels: builder.query<ElectroPanelModel[], void>({
      query: () => "panel_models?_embed=enclosures&_embed=components",
      // RTK Query автоматически вернет пустой массив, если данных нет,
      // или можно трансформировать ответ:
      transformResponse: (response: ElectroPanelModel[]) => response ?? [],
    }),

    // Пример запроса на обновление (вместо updateElectroPanel)
    updatePanel: builder.mutation<
      ElectroPanelModel,
      Partial<ElectroPanelModel>
    >({
      query: ({ id, ...patch }) => ({
        url: `panel_models/${id}`,
        method: "PATCH",
        body: patch,
      }),
    }),
  }),
});

// Хуки генерируются автоматически
export const { useGetElectroPanelsQuery, useUpdatePanelMutation } = electroApi;
