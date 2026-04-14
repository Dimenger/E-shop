import { useNavigate, NavLink } from "react-router";
import {
  NAV_BUTTONS_LIST,
  type NavItem,
} from "@/shared/constants/nav-buttons-list";
import { Button } from "@/shared/ui/button/Button";
import styles from "./control-panel.module.css";

export const ControlPanel = () => {
  const navigate = useNavigate();

  return (
    <div>
      {NAV_BUTTONS_LIST.map((button: NavItem) => {
        if (button.isBack) {
          return (
            <Button key={button.id} type="button" onClick={() => navigate(-1)}>
              {button.title}
            </Button>
          );
        }

        return (
          <NavLink
            key={button.id}
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
            to={button.path!}
          >
            <Button>{button.title}</Button>
          </NavLink>
        );
      })}
    </div>
  );
};

/*
В TypeScript символ ! после переменной называется Non-null assertion operator (оператор ненулевого утверждения).
Он говорит компилятору: «Я точно знаю, что здесь не null и не undefined, доверься мне и не выдавай ошибку».

У обычного HTML-тега <button> поведение по умолчанию — type="submit". Если ваша панель управления (ControlPanel) когда-нибудь окажется внутри любой формы (<form>), нажатие на кнопку «Назад» без type="button" перезагрузит страницу, пытаясь отправить данные формы. Явное указание type="button" это предотвращает.

*/
