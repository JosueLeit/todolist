import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import styles from "./styles/global.css";

function App() {
  return (
    <div className={styles}>
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
