import type questionItemElement from "./questionItemElement";
import QuestionItemContent from "./questionItemContent";
import styles from "./page.module.css";

// Item에 대한 내용물을 요청해서 가져오는 컴포넌트 만드는 게 마음이 편할듯

const QuestionItem: React.FC<questionItemElement> = (props) => (
  <div className={styles.questionItem}>
    <h3>{props.title}</h3>
    <QuestionItemContent id={props.questionId} />
    <p>#{props.category}</p>
  </div>
);

export default QuestionItem;
