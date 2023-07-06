import Styles from "./button-right-bottom-border.module.css";

const Button = ({ children }: { children: React.ReactNode }) => {
  return <div className={Styles.button}>{children}</div>;
};

export default Button;
