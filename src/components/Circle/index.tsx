import styles from "./styles.module.css";

interface ICircleProps {
  color: string;
}

export const Circle = ({ color }: ICircleProps) => {
  return (
    <div
      style={{ backgroundColor: color}}
      className={styles.circle}
    ></div>
  );
};
