const CategoryItem: React.FC<{
  category: string;
  selected: string;
  setSelected: (selected: string) => void;
}> = (props) => {
  return (
    <div>
      <p>#{props.category}</p>
    </div>
  );
};

export default CategoryItem;
