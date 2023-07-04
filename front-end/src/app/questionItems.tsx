import type questionItemElement from "../types/questionItemElement";
import QuestionItem from "./questionItem";
import styles from "./page.module.css";

const QuestionItems: React.FC<{
  items: questionItemElement[];
  sort: string;
}> = (props) => (
  <div>
    {props.items.map((item) => (
      <QuestionItem key={item.questionId} item={item} sort={props.sort} />
    ))}
  </div>
);

export default QuestionItems;
