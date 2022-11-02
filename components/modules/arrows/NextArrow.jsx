import "../../../scss/home/_arrows.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
    >
      <ArrowForwardIosIcon className="nextArrow" />
    </div>
  );
}

export default NextArrow;
