"use client";
import Styles from "./answerInfoDetail.module.css";

const AnswerInfoDetailTop: React.FC<{
  createdAt: string;
  updatedAt: string;
  nickname: string;
}> = (props) => {
  const createdAt = new Date(props.createdAt);
  const updatedAt = new Date(props.updatedAt);
  const dateInfo: string =
    createdAt === updatedAt
      ? "created at " + createdAt.toLocaleDateString("en-Us")
      : "updated at " + updatedAt.toLocaleDateString("en-Us");
  const onClick = () => {
    console.log("clicked!");
  };
  return (
    <div className={Styles.answerInfo}>
      <div className={Styles.answerTitle}>
        <h3>A. </h3>
        <i>written by. {props.nickname}</i>
      </div>
      <div className={Styles.meta}>
        <p>{dateInfo}</p>
        <img src={"/pen.png"} onClick={onClick} style={{ height: "1em" }} />
        <img
          src={"/trashCan.png"}
          onClick={onClick}
          style={{ height: "1em" }}
        />
      </div>
    </div>
  );
};

export default AnswerInfoDetailTop;
