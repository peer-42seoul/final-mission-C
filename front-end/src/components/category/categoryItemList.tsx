import { Categories } from "@/types/categories";
const CategoryItemList: React.FC<{
  selected: string;
  setSelected: (selected: string) => void;
}> = (props) => {
  const categories = Object.keys.(Categories);
  return <div>{categories.map((category) => )}</div>;
};

export default CategoryItemList;
