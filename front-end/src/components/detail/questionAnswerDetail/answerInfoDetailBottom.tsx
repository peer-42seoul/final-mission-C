import Styles from "./answerInfoDetailBottom.module.css";
import LoadingBackdrop from "@/components/common/loadingBackdrop";
import useRecommend from "@/hooks/useRecommend";

const AnswerInfoDetailBottom: React.FC<{
  answerId: number;
  recommend: number;
}> = (props) => {
  const { hasError, setHasError, isLoading, recommend, onClickHandler } =
    useRecommend({
      type: "answer",
      recommend: props.recommend,
      id: props.answerId,
    });
  return (
    <div>
      <div className={Styles.answerInfo}>
        <div className={Styles.meta}>
          <img
            src="/recommend.png"
            style={{ height: "1em" }}
            onClick={onClickHandler}
          />
          <p>{recommend} recommends</p>
        </div>
      </div>
      <LoadingBackdrop
        hasError={hasError}
        setHasError={setHasError}
        isLoading={isLoading}
      />
    </div>
  );
};

export default AnswerInfoDetailBottom;
