import React from "react";
import { AppProps } from "../../../types";
import styles from "./Card.module.css";

interface CardProps extends AppProps {
  title?: string | null;
  children?: React.ReactNode | null;
}

const Card = ({ title = null, children = null }: CardProps) => {
  return (
    <div className={styles.container}>
      {title !== null && <header className={styles.title}>{title}</header>}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Card;
