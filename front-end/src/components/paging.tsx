import PagingIndex from "./pagingIndex";

// 현재 인덱스는 나중에 상태 변수로 바꿀 것. 핸들러도 줘야될듯
const Paging: React.FC<{totalPages:number, index:number, first:boolean, last: boolean}> = (props) => {
  let length:number = props.totalPages;
  let hasPrevPaging:boolean = !props.first;
  let hasNextPaging:boolean = !props.last;

  if (length > 10) {
    length = 10;
  }
  let i = 0;
  let index = 0; // 인덱스 로직 생각하기 ^^

  let components = [];

  for (; i<length; i++) {
    if (i + 1 == props.index)
    components.push(<PagingIndex index={i + 1}/>);
  }
  return (
    <div>
      {}
    </div>
  );
}

export default Paging;