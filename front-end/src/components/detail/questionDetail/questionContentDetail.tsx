import Style from "./questionContentDetail.module.css";

const QuestionContentDetail: React.FC<{ content: string }> = (props) => {
  return (
    <div className={Style.content}>
      <p>{props.content}</p>
    </div>
  );
};

export default QuestionContentDetail;
