import React from "react";
import { AppProps } from "../../../../types";
import styles from "./Button.module.css";

interface ButtonProps extends AppProps {
  text: string;
}

const Button = (props: ButtonProps) => {
  return <button className={styles.button}>{props.text}</button>;
};

export default Button;
