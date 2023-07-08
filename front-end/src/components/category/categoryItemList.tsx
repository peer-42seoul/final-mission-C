import { Categories } from "@/types/categories";
import CategoryItem from "./categoryItem";
import Styles from "./category.module.css";

const CategoryItemList: React.FC<{
  selected: string;
  setSelected: (selected: string) => void;
}> = (props) => {
  const categories: string[] = Object.values(Categories) as string[];
  return (
    <div className={Styles.categoryItemList}>
      <h2>Categories</h2>
      <hr />
      {/* <div id="belowTitle" /> */}
      {categories.map((category) => {
        if (category !== "")
          return (
            <div key={category}>
              <CategoryItem
                key={category}
                selected={props.selected}
                setSelected={props.setSelected}
                categoryName={category}
              />
            </div>
          );
      })}
    </div>
  );
};

export default CategoryItemList;
