import Styles from "./answerInfoDetailBottom.module.css";

const AnswerInfoDetailBottom: React.FC<{
  recommend: number;
}> = (props) => {
  return (
    <div className={Styles.answerInfo}>
      <div className={Styles.meta}>
        <img src="/recommend.png" style={{ height: "1em" }} />
        <p>{props.recommend} recommends</p>
      </div>
    </div>
  );
};

export default AnswerInfoDetailBottom;
