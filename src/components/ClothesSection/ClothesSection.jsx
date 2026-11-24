import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ clothingItems, onCardClick, onAddClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section-menu">
        <h2 className="clothes-section-menu-title">Your Items</h2>
        <button
          onClick={onAddClick}
          type="button"
          className="clothes-section-menu-btn"
        >
          + Add new
        </button>
      </div>
      <div className="clothes-section-cards">
        <ul className="clothes-section-cards-items">
          {clothingItems.map((item) => {
            return (
              <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ClothesSection;
