import React from "react";

import styles from "./styles.module.css";

export const Input = () => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor="category">Categoria</label>
      <input
        id="category"
        type="text"
        placeholder="Ex: Estudar"
      />
    </div>
  );
};
