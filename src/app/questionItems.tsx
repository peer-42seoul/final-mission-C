import type questionItemElement from "./questionItemElement";
import QuestionItem from "./questionItem";
import styles from "./page.module.css";

const QuestionItems: React.FC<{ items: questionItemElement[] }> = (props) => (
  <div>
    {props.items.map((item) => (
      <QuestionItem
        key={item.questionId}
        questionId={item.questionId}
        title={item.title}
        answerCount={item.answerCount}
        category={item.category}
        recommend={item.recommend}
        view={item.view}
        nickname={item.nickname}
        createdAt={item.createdAt}
      />
    ))}
  </div>
);

export default QuestionItems;
