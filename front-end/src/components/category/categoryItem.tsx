import Button from "@/components/common/button-right-bottom-border";
import Style from "./category.module.css";

const CategoryItem: React.FC<{
  categoryName: string;
  selected: string;
  setSelected: (selected: string) => void;
}> = (props) => {
  let className = Style.categoryName;

  if (props.selected == props.categoryName) {
    className = Style.selected;
  }

  const onClickHandler = (event: React.MouseEvent) => {
    if (props.selected == props.categoryName) {
      props.setSelected("" as string);
    } else {
      props.setSelected(props.categoryName);
    }
    console.log(props.selected);
  };

  return (
    <div className={Style.category}>
      <Button onClick={onClickHandler}>
        <h3 className={className}>{props.categoryName}</h3>
      </Button>
      <hr color="white" />
    </div>
  );
};

export default CategoryItem;
