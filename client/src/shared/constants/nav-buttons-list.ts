export interface NavItem {
  readonly id: string;
  readonly title: string;
  readonly path: string | null;
  readonly isBack?: boolean;
}

export const NAV_BUTTONS_LIST = [
  { id: "Home", title: "Главная", path: "/" },
  { id: "Areas", title: "Направления", path: "/areas" },
  { id: "Panels", title: "Электрощиты", path: "/panels" },
  { id: "News", title: "Новости", path: "/news" },
  { id: "Contacts", title: "Контакты", path: "/contacts" },
  { id: "Back", title: "Назад", path: null, isBack: true },
] as const satisfies readonly NavItem[];

// satisfies проверит, что данные подходят под NavItem, но не "затрет" строгие ID

// Экспортируем тип ID, если он пригодится в компонентах (например, для стейта activeId)
// Тип для ID пригодится, чтобы строго ограничить activeId в стейте
export type ButtonId = (typeof NAV_BUTTONS_LIST)[number]["id"];
