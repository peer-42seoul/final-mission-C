import Styles from "./button-right-bottom-border.module.css";

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent) => void;
}) => {
  return (
    <div onClick={onClick} className={Styles.button}>
      {children}
    </div>
  );
};

export default Button;
