import PagingIndex from "./pagingIndex";

// 현재 인덱스는 나중에 상태 변수로 바꿀 것. 핸들러도 줘야될듯
const Paging: React.FC<{
  totalPages: number;
  index: number;
  first: boolean;
  last: boolean;
}> = (props) => {
  let length: number = props.totalPages;
  let hasPrevPaging: boolean = !props.first;
  let hasNextPaging: boolean = !props.last;

  if (length > 10) {
    length = 10;
  }
  let last = props.totalPages;
  let i = 1;
  let index = (props.index / 10) * 10;
  if (props.index % 10 === 0) {
    index -= 10;
  }

  let components = [];

  for (; i < length; i++) {
    if (i + 1 == props.index) components.push(<PagingIndex index={i + 1} />);
  }
  return <div>{}</div>;
};

export default Paging;
