import Button from "../common/button-right-bottom-border";
import Styles from "./questionInfoDetailBottom.module.css";

const QuestionInfoDetailBottom: React.FC<{
  category: string;
  view: number;
  recommend: number;
}> = (props) => {
  return (
    <div className={Styles.questionInfo}>
      <div className={Styles.category}>
        <Button>
          <p>#{props.category.toLowerCase()}</p>
        </Button>
      </div>
      <div className={Styles.meta}>
        <img src="/view.png" style={{ height: "1em" }} />
        <p>{props.view} views</p>
        <img src="/recommend.png" style={{ height: "1em" }} />
        <p>{props.recommend} recommends</p>
      </div>
    </div>
  );
};

export default QuestionInfoDetailBottom;
