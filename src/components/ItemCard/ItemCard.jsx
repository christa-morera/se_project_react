import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleClick = () => {
    onCardClick(item);
  };
  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img
        onClick={handleClick}
        className="card__img"
        src={item.link}
        alt={item.name}
      ></img>
    </li>
  );
}

export default ItemCard;
