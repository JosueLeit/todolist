import logoTodo from "../../assets/Logo.png";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoTodo} />
    </header>
  );
}
