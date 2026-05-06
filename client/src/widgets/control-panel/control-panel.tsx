import { useLocation, useNavigate } from "react-router";

import { Button } from "@/shared/ui/button/Button";
import styles from "./control-panel.module.css";
import {
  NAV_BUTTONS_LIST,
  type NavItem,
} from "@/shared/constants/nav-buttons-list";

export const ControlPanel = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.controlPanelContainer}>
      <div className={styles.buttonsContainer}>
        {NAV_BUTTONS_LIST.map((button: NavItem) => {
          if (button.isBack) {
            return (
              <Button
                key={button.id}
                type="button"
                onClick={() => navigate(-1)}
              >
                {button.title}
              </Button>
            );
          }

          const isActive = location.pathname === button.path;

          return (
            <div
              key={button.id}
              className={isActive ? styles.activeLink : undefined}
            >
              <Button type="button" onClick={() => navigate(button.path!)}>
                {button.title}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/*
В TypeScript символ ! после переменной называется Non-null assertion operator (оператор ненулевого утверждения).
Он говорит компилятору: «Я точно знаю, что здесь не null и не undefined, доверься мне и не выдавай ошибку».

У обычного HTML-тега <button> поведение по умолчанию — type="submit". Если ваша панель управления (ControlPanel) когда-нибудь окажется внутри любой формы (<form>), нажатие на кнопку «Назад» без type="button" перезагрузит страницу, пытаясь отправить данные формы. Явное указание type="button" это предотвращает.

*/
