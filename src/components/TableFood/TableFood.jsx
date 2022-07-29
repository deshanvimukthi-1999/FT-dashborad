import "./tableFood.scss";
import Button from "../../components/Button";

export default function TableFood() {
  return (
    <div className="ArtCardItem">
    <img
        src="/assets/img/card-image-1.png"
        alt="card-image"
        className="ArtCardImg"
    />
    <div className="ArtCardTitle">
        <span className="ArtCardTitleName">Multigrain Hot Cereal</span>
        <span className="ArtCardPrice">$25.22</span>
    </div>
    <Button className="ArtCarddButton">
        <div className="ArtCardIcon" />
         View All
    </Button>
</div>

  );
}