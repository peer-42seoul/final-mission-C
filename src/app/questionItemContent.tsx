import Styles from "./page.module.css";

const QuestionItemContent: React.FC<{ id: number }> = (props) => (
  <p className={Styles.questionContent}>content! content id : {props.id}</p>
);

export default QuestionItemContent;
