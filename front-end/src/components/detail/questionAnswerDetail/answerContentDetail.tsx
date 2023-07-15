import Style from "./answerContentDetail.module.css";

const AnswerContentDetail: React.FC<{ content: string }> = (props) => {
  return (
    <div className={Style.content}>
      <p>{props.content}</p>
    </div>
  );
};

export default AnswerContentDetail;
