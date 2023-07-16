import useRecommend from "@/hooks/useRecommend";
import Button from "../../common/button-right-bottom-border";
import Styles from "./questionInfoDetailBottom.module.css";
import LoadingBackdrop from "@/components/common/loadingBackdrop";

const QuestionInfoDetailBottom: React.FC<{
  category: string;
  view: number;
  recommend: number;
  id: number;
}> = (props) => {
  const { hasError, setHasError, isLoading, recommend, onClickHandler } =
    useRecommend({
      type: "question",
      recommend: props.recommend,
      id: props.id,
    });
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
        <img
          src="/recommend.png"
          style={{ height: "1em" }}
          onClick={onClickHandler}
        />
        <p>{recommend} recommends</p>
      </div>
      <LoadingBackdrop
        hasError={hasError}
        setHasError={setHasError}
        isLoading={isLoading}
      />
    </div>
  );
};

export default QuestionInfoDetailBottom;
