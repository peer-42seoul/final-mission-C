"use client";
const ImgButton: React.FC<{
  imgSrc: string;
  onClick: () => void;
  height?: string;
}> = (props) => {
  const style = { height: `${props.height ? props.height : "1em"}` };
  return <img src={props.imgSrc} onClick={props.onClick} style={style} />;
};

export default ImgButton;
