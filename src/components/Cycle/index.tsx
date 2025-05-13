import styles from "./styles.module.css";
import { Circle } from "../Circle";

export const Cycle = () => {
  return (
    <div className={styles.cycle}>
      <h2>Ciclo:</h2>
      <div className={styles.cycleContent}>
        <Circle color="red" />
        <Circle color="red" />
        <Circle color="red" />
      </div>
    </div>
  );
};
