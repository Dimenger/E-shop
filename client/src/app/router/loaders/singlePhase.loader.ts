import { store } from "@/app/store";
import { electroApi } from "@/entities/electro-panels/api";

export const singlePhaseLoader = async () => {
  // 1. Инициируем запрос через dispatch.
  // Мы используем .initiate(), чтобы запустить запрос вручную вне хуков.
  const promise = store.dispatch(
    electroApi.endpoints.getElectroPanels.initiate(),
  );

  try {
    // 2. Дожидаемся завершения запроса
    await promise.unwrap();
  } catch (error) {
    console.error("Ошибка при загрузке щитов в лоадере:", error);
  } finally {
    // 3. Важно: .unsubscribe(), если ты не хочешь, чтобы данные висели в кэше вечно
    // Но обычно для лоадера это не обязательно, если страница сразу подхватит данные.
  }

  return null;
};
