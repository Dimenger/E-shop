import { configureStore } from "@reduxjs/toolkit";
// 1. Импортируем редьюсеры
import { panelsReducer } from "../entities/electro-panels/model/panel.slice";
// 2. Импортируем API сервис
import { electroApi } from "../entities/electro-panels/api";

export const store = configureStore({
  reducer: {
    // Добавляем обычный слайс (для UI)
    panels: panelsReducer,

    // Добавляем API (ключ берется из самого api)
    [electroApi.reducerPath]: electroApi.reducer,
  },
  // 3. ОБЯЗАТЕЛЬНО: добавляем middleware для работы кэширования и запросов
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(electroApi.middleware),
});

// Типизация для хуков
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
