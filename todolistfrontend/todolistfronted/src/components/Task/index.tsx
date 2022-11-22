import styles from "./task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>texto da tarefa a ser feita</p>

      <button>apagar</button>
    </div>
  );
}
