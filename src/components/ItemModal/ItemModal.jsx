import "./ItemModal.css";
import closeIcon from "../../assets/close-btn-white.png";

function ItemModal({ card, isOpen, onClose, onDeleteConfirmation }) {
  const handleDeleteItem = () => {
    onDeleteConfirmation(card);
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button type="button" className="modal__close" onClick={onClose}>
          <img src={closeIcon} alt="Close" className="modal__close-icon"></img>
        </button>
        <img src={card.imageUrl} className="modal__image" alt={card.name} />
        <div className="modal__footer">
          <div className="modal__footer-item-info">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <button
            onClick={handleDeleteItem}
            type="button"
            className="modal__delete-item-btn"
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
