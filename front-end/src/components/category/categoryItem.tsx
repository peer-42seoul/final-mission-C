import Button from "@/components/common/button-right-bottom-border";

const CategoryItem: React.FC<{
  categoryName: string;
  selected: string;
  setSelected: (selected: string) => void;
}> = (props) => {
  return (
    <Button>
      <p>{props.categoryName}</p>
    </Button>
  );
};

export default CategoryItem;
