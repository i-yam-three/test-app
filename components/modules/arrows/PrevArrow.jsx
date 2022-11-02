import "../../../scss/home/_arrows.scss";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick}>
      <ArrowBackIosNewIcon className="prevArrow" />
    </div>
  );
}

export default PrevArrow;
