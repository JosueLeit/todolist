import logoTodo from "../../assets/profileJosue.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./header.module.css";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={logoTodo} className={styles.responsive} />

        <form className={styles.newTaskForm}>
          <input placeholder="Adicione uma nova tarefa" type="text" />
          <button className={styles.deleteButton}>
            Criar
            <AiOutlinePlusCircle size={20} />
          </button>
        </form>
      </header>
    </>
  );
}
