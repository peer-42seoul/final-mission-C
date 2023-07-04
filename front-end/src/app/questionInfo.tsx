import Style from "./page.module.css";

const QuestionInfo: React.FC<{
  title: string;
  createdAt: string;
  view: number;
  recommend: number;
  sort: string;
  nickname: string;
  answerCount: number
}> = (props) => {
  const imgSrc = `/${props.sort}.png`;
  let hasImg = true;
  let metaText = "";
  if (props.sort === "latest") {
    hasImg = false;
    metaText = `created at ${new Date(props.createdAt).toLocaleDateString()}`;
  } else if (props.sort === "views") {
    metaText = `${props.view} views`;
  } else {
    metaText = `${props.recommend}`;
  }

  return (
    <div className={Style.questionInfo}>
      <div className={Style.meta}>
        <h3>{props.title}</h3>
        <i>written by. {props.nickname}</i>
      </div>
      <div className={Style.meta}>
        <img src="/comment.png"/>
        <p>{props.answerCount}</p>
        {hasImg && <img src={imgSrc}></img>}
        {hasImg && <p>{metaText}</p>}
        {!hasImg && (
          <p
            style={{
              fontSize: "0.75em",
              padding: "0.25em 5px 0 5px",
              color: "grey",
            }}
          >
            {metaText}
          </p>
        )}
      </div>
    </div>
  );
};

export default QuestionInfo;
