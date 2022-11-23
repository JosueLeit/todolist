import logoTodo from "../../assets/profileJosue.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./header.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <>
      <header className={styles.header}>
        <img src={logoTodo} className={styles.responsive} />

        <form className={styles.newTaskForm} onSubmit={handleSubmit}>
          <input
            placeholder="Tarefas para Josué"
            type="text"
            onChange={onChangeTitle}
            value={title}
          />
          <button className={styles.deleteButton}>
            Criar
            <AiOutlinePlusCircle size={20} />
          </button>
        </form>
      </header>
    </>
  );
}
