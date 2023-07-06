import { Categories } from "@/types/categories";
import CategoryItem from "./categoryItem";
const CategoryItemList: React.FC<{
  selected: string;
  setSelected: (selected: string) => void;
}> = (props) => {
  const categories: string[] = Object.values(Categories) as string[];
  return (
    <div>
      {categories.map((category) => {
        return (
          <CategoryItem
            selected={props.selected}
            setSelected={props.setSelected}
            categoryName={category}
          />
        );
      })}
    </div>
  );
};

export default CategoryItemList;
