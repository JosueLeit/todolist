import logoTodo from "../../assets/profileJosue.svg";
import styles from "./header.module.css";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={logoTodo} className={styles.responsive} />

        <form className={styles.newTaskForm}>
          <input placeholder="Adicione uma nova tarefa" type="text" />
          <button>Criar</button>
        </form>
      </header>
    </>
  );
}
