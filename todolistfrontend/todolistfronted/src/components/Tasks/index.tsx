import styles from "./tasks.module.css";
import { Task } from "../Task";

export function Tasks() {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div className={styles.headerText}>
          <p>Tarefas criadas</p>
          <span className={styles.taskcounter}>5</span>
        </div>
        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>5 de 10</span>
        </div>
      </header>

      <div className={styles.list}>
        <Task />
        <Task />
        <Task />
      </div>
    </section>
  );
}
