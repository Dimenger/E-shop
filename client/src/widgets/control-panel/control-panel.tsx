import { NavLink } from "react-router";
import {
  NAV_BUTTONS_LIST,
  type NavItem,
} from "../../shared/constants/nav-buttons-list";
import { Button } from "../../shared/ui/button/Button";
import styles from "./control-panel.module.css";

export const ControlPanel = () => {
  return (
    <div>
      {NAV_BUTTONS_LIST.map((button: NavItem) => (
        <NavLink
          key={button.id}
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
          to={button.path}
        >
          <Button>{button.title}</Button>
        </NavLink>
      ))}
    </div>
  );
};
