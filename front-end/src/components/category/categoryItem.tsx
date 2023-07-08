import Button from "@/components/common/button-right-bottom-border";
import Style from "./category.module.css";

const CategoryItem: React.FC<{
  categoryName: string;
  selected: string;
  setSelected: (selected: string) => void;
}> = (props) => {
  return (
    <div className={Style.category}>
      <Button>
        <h3>{props.categoryName}</h3>
      </Button>
      <hr color="white" />
    </div>
  );
};

export default CategoryItem;
