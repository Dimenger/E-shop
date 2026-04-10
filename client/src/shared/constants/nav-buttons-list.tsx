export interface NavItem {
  readonly id: string;
  readonly title: string;
  readonly path: string;
}

export const NAV_BUTTONS_LIST = [
  { id: "Home", title: "Главная", path: "/" },
  { id: "Services", title: "Направления", path: "/services" },
  { id: "Schedule", title: "Расписание", path: "/schedule" },
  { id: "Posts", title: "Новости", path: "/posts" },
] as const satisfies readonly NavItem[];

// satisfies проверит, что данные подходят под NavItem, но не "затрет" строгие ID

// Экспортируем тип ID, если он пригодится в компонентах (например, для стейта activeId)
// Тип для ID пригодится, чтобы строго ограничить activeId в стейте
export type ButtonId = (typeof NAV_BUTTONS_LIST)[number]["id"];
